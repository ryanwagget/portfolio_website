<?php
//collects all files together so you can access all, not connect tho
$user = "rywagget_rw";
//$pass = "root"; //for windows
$pass = "yoyoryan8"; //for mac
$url = "localhost:3306";
$db = "rywagget_db_graphic";

//$link = mysqli_connect($url, $user, $pass, $db); //for windows
$link = mysqli_connect($url, $user, $pass, $db, "8889"); //for mac

//checks if connection fails
if(mysqli_connect_errno())
{
  printf("Connect failed %s\n", mysqli_connect_error());
  exit();
}

?>
