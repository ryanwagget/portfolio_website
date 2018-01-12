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
function submitMessage($name, $email, $message)
{
	$to = "ryan@ryanwagget.ca";
	$subj = "Email from Portfolio Site";
	$extra = "Reply-to: {$email}";
	$msg = "Name: ".$name."\n\nEmail: ".$email."n\n\Message: ".$message;
	//return "Thanks {$name}! Your message was sent succesfully!";
	//THIS WILL NOT WORK LOCALLY. THIS NEEDS TO BE TESTED ON YOUR HOSTING
	mail($to, $subj, $msg, $extra);
}

?>
