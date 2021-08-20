<?php
require_once 'connection.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");
//error_reporting(E_ALL &~ E_NOTICE);
$data = json_decode(file_get_contents("php://input"));
$user = "owolabihammed2001@gmail.com:olalekan2019";
$token = base64_encode($user);
$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_URL => "https://sandbox.vtpass.com/api/service-variations?serviceID=airtel-data",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER =>  array(
        "Authorization: Basic ".$token,
       
      )
  ));
  
  $response = curl_exec($curl);
  $err = curl_error($curl);
  curl_close($curl);
  
  if ($err) {
    echo "cURL Error #:" . $err;
  } else {
      echo $response;
    //$result =json_decode($response) ;
  }