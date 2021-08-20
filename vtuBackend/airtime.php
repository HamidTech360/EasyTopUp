<?php
require_once 'connection.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");

$data = json_decode(file_get_contents("php://input"));
$phone_no = $data->phone_no;
$amount = $data->amount;
$network = $data->network;
$email = $data->email;

$select = "SELECT balance from users WHERE email = '$email'";
$query = mysqli_query($connect, $select);

$row = mysqli_fetch_assoc($query);
$balance = $row['balance'];
if($amount <= $balance){
      $curl = curl_init();
      $request_id = 'ref_'.mt_rand();
      
    $body = array('serviceID'=>$network,'request_id'=>$request_id,'amount'=>$amount,'phone'=>'08011111111');
    $Ebody = json_encode($body);
    $user = "owolabihammed2001@gmail.com:olalekan2019";
    $token = base64_encode($user);
      curl_setopt_array($curl, array(
        CURLOPT_URL => "https://sandbox.vtpass.com/api/pay",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_POSTFIELDS=>$body,
        CURLOPT_HTTPHEADER => array(
          "Authorization: Basic ".$token,
        
        )
      ));
      
      $response = curl_exec($curl);
      $err = curl_error($curl);
    
      curl_close($curl);

      $rem_balance = $balance - $amount;
      $update = "UPDATE users SET balance = '$rem_balance' WHERE email='$email'";
      $updated = mysqli_query($connect, $update);
      
      // $output = json_encode($response);

    // echo $response;
    $arr = json_decode($response, true);
    $code = $arr['code'];
    $response = $arr['response_description'];
    echo json_encode(array('code'=>$code, 'status'=> $response));
}else{
  echo json_encode(array( 'status'=> 'low_fund'));
}


 

?>