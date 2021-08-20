<?php


require_once 'connection.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");

$data = json_decode(file_get_contents("php://input"));

$email= $_POST['email'];
$password = $_POST['password'];

$select = "SELECT email FROM users WHERE email='$email' AND password = '$password'";
$selected = mysqli_query($connect, $select);

// if($selected){
//     echo 'selected';
// }else{
//     echo 'not-selected';
// }
if(mysqli_num_rows($selected) > 0){
    echo 'found';
}else{
    echo 'not-found';
}