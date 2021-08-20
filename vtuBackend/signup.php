<?php


require_once 'connection.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");

$data = json_decode(file_get_contents("php://input"));

$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$pwd = $_POST['password'];
$phone_no = $_POST['phone_no'];
$balance = 0;

$select = "SELECT email FROM users WHERE email='$email'";
$selected = mysqli_query($connect, $select);


if(mysqli_num_rows($selected) == 0){
    $insert = "INSERT INTO users (firstname, lastname, password, email, phone, balance)VALUES('$fname', '$lname', '$pwd', '$email', '$phone_no', '$balance')";
    $inserted = mysqli_query($connect, $insert);
    echo json_encode(array('insert'=>'inserted'));
}else{
    echo json_encode(array('insert'=>'existing'));
}


