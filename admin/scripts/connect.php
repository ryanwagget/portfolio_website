<?php
//collects all of our files together, so you can access everything, not connect tho
$user = "root";
//$pass = "root"; //windows
$pass = "root"; //mac
$url = "localhost";
$db = "db_work";

//ticket to access our db
//$link = mysqli_connect($url, $user, $pass, $db); //windows
$link = mysqli_connect($url, $user, $pass, $db, "8889"); //mac

//check our connection if it fails
IF(mysqli_connect_errno())
{
  printf("Connect failed %s\n", mysqli_connect_error());
  exit();
}

?>
