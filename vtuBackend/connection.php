<?php
session_start();
$host = "localhost";
$username = "root";
$password = "";
$db = "vtu";

$connect = mysqli_connect($host, $username, $password, $db);

// if($connect){
//     echo 'connection established';
// }else{
//     echo 'failed to establish connection';
// }