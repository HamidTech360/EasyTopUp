<?php
require_once 'connection.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");
//error_reporting(E_ALL &~ E_NOTICE);
$data = json_decode(file_get_contents("php://input"));

$email = $data->email;
$phone_no = $data->phone_no;
$amount = $data->amount * 100;

$url = "https://api.paystack.co/transaction/initialize";
$fields = [
  'email' => "$email",
  'amount' => "$amount",
];
$fields_string = http_build_query($fields);
//open connection
$ch = curl_init();

//set the url, number of POST vars, POST data
curl_setopt($ch,CURLOPT_URL, $url);
curl_setopt($ch,CURLOPT_POST, true);
curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
  "Authorization: Bearer sk_test_e7ef323f68e6b1b1783846c53d1aa16a1eb82017",
  "Cache-Control: no-cache",
));

//So that curl_exec returns the contents of the cURL; rather than echoing it
curl_setopt($ch,CURLOPT_RETURNTRANSFER, true); 

//execute post
$result = curl_exec($ch);
echo $result;