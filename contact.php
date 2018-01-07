<?php
require_once("admin/scripts/config.php");
if(isset($_POST['submit']))
{
  //echo "Good for you, you can click a button ;)";
  $name = $_POST['name'];
  $email = $_POST['email'];
  $color = $_POST['favColor'];
  $message = $_POST['message'];
  $direct = "thankyou.php";
  //echo $message;
  if($color === "")
  {
    //echo"Huamn";
    $sendMail = submitMessage($name, $email, $message, $direct);
  }

}

?>
