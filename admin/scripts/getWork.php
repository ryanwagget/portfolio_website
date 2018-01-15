<?php

include("connect.php");

if(isset($_GET['id']))

	//in url= image_project=1
	$id = $_GET['id'];
	$workQuery = "SELECT * FROM tbl_images WHERE images_id={$id}";
	$getImages = mysqli_query($link, $workQuery);
	//where work_id
}else{
$workQuery = "SELECT images_id, images_link, images_title, images_desc FROM tbl_images WHERE images_primary='yes'"; //where images_primary=yes
$getWork = mysqli_query($link, $workQuery);
}

$grpResult = "";

echo "[";

while($workResult = mysqli_fetch_assoc($getWork))
{
	$jsonResult = json_encode($workResult);
	echo $jsonResult;
	$grpResult .= $jsonResult. ",";
}

echo substr($grpResult, 0, -1);

echo "]";
mysqli_close($link);
?>
