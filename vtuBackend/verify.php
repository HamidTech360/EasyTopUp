<?php
require_once 'connection.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");
//error_reporting(E_ALL &~ E_NOTICE);
$data = json_decode(file_get_contents("php://input"));

$ref = $data->ref;
$email = $data->email;
$curl = curl_init();
//.rawurlencode($ref)
curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.paystack.co/transaction/verify/" .rawurlencode($ref),
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
    "Authorization: Bearer sk_test_e7ef323f68e6b1b1783846c53d1aa16a1eb82017",
    "Cache-Control: no-cache",
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);
curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  $result =json_decode($response) ;
}

if($result->data->status=="success"){
  $select = "SELECT * FROM users WHERE email = '$email'";
  $query = mysqli_query($connect, $select);
  if($query){
    $row = mysqli_fetch_assoc($query);
    $balance = $row['balance'];

    $amount_paid = $result->data->amount/100;
    $new_balance = $balance + $amount_paid;
    // echo $new_balance;

    $update = "UPDATE users SET balance = '$new_balance' WHERE email='$email'";
    $updated = mysqli_query($connect, $update);
    if($updated){
      echo json_encode(array('status'=>'updated', 'new_balance'=>$new_balance));
    }
  }
}else{
    echo 'failed';
}