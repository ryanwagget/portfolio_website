<?php
require_once("admin/scripts/config.php");
if(isset($_POST['submit']))
{

  $name = $_POST['name'];
  $email = $_POST['email'];
  $color = $_POST['favColor'];
  $message = $_POST['comments'];


  if($color === "")
  {
    submitMessage($name, $email, $message);
  }
}

?>
