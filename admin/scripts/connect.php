<?php
//collects all of our files together, so you can access everything, not connect tho
$user = "rywagget_rw";
//$pass = "root"; //windows
$pass = "yoyoryan8"; //mac
$url = "localhost:3306";
$db = "rywagget_db_graphic";

//ticket to access our db
//$link = mysqli_connect($url, $user, $pass, $db); //windows
$link = mysqli_connect($url, $user, $pass, $db, "8889"); //mac

//check our connection if it fails
if(mysqli_connect_errno())
{
  printf("Connect failed %s\n", mysqli_connect_error());
  exit();
}

?>
