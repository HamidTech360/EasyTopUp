<?php


require_once 'connection.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");
//error_reporting(E_ALL &~ E_NOTICE);
$data = json_decode(file_get_contents("php://input"));

$userEmail = $data->email;
$select = "SELECT * FROM users WHERE email = '$userEmail'";
$query = mysqli_query($connect, $select);

$data = [];
$row = mysqli_fetch_assoc($query);
$data[] = $row;


echo json_encode($data);