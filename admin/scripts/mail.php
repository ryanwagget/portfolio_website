<?php
function redirect_to($location)
{
	if($location != NULL) //if something is there
	{
		header("Locaton: {$location}");
		exit;
	}
}
//echo "connected";
function submitMessage($name, $email, $message, $direct)
{
	$to = "ryan@ryanwagget.ca";
	$subj = "Email from Portfolio Site";
	$extra = "Reply-to: {$email}";
	$msg = "Name: ".$name."\n\nEmail: ".$email."n\n\Message: ".$message;
	$direct = "thankyou.php"; //go create this page
	//THIS WILL NOT WORK LOCALLY. THIS NEEDS TO BE TESTED ON YOUR HOSTING
	//mail($to, $subj, $msg, $extra);
	$direct = $direct."?name={$name}";
	redirect_to($direct);
}

?>
