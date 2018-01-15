<?php
function redirect_to($location)
{
	if($location != NULL)
	{
		header("Locaton: {$location}");
		exit;
	}
}

function submitMessage($name, $email, $message)
{
	$to = "ryan@ryanwagget.ca";
	$subj = "Email from Portfolio Website";
	$extra = "Reply-to: {$email}";
	$msg = "Name: ".$name."\n\nEmail: ".$email."n\n\Message: ".$message;
	mail($to, $subj, $msg, $extra);
	//THIS WILL NOT WORK LOCALLY. THIS NEEDS TO BE TESTED ON YOUR HOSTING

}

?>
