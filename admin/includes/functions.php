<?php
  $user = 'rywagget_rw';
	$pass = 'yoyoryan8';
	$host = 'localhost:3306';
	$db = "rywagget_db_graphic";

//TRY connecting to the server
	$conn = mysqli_connect($host, $user, $pass, $db);

	mysqli_set_charset($conn, 'utf8');

	if(!$conn){
		echo 'uh oh it broken';
		exit;
	}
	//echo 'connected!';
	if(isset($_GET['getWork'])){
		$myQuery = 'SELECT * FROM tbl_images WHERE images_primary = "yes"'; //this gets the thumbnails
		$results = mysqli_query($conn, $myQuery);
		$rows = array();
		while ($row = mysqli_fetch_assoc($results)){
			$rows[] = $row;
		}
		echo json_encode($rows); //show it on the page
	}

	if(isset($_GET["PortfolioPiece"])){
		$portOption = $_GET["PortfolioPiece"];

	$myQuery = "SELECT * FROM tbl_images WHERE images_projects= '$portOption' AND images_primary= 'no'"; //this gets the images that go inside of the lightbox
  //SELECT * FROM tbl_images WHERE img_projects = "codeworld"
  $result = mysqli_query($conn, $myQuery);
	$row =  mysqli_fetch_assoc($result);
	echo json_encode($row);
}

// if (isset($_GET['getVideos'])) {
//   $myQuery = 'SELECT videos_thumb FROM tbl_videos';
//   // send the query
//   $result = mysqli_query($conn, $myQuery);
//   // get the result
//   $rows = array();
//
//   while($row = mysqli_fetch_assoc($result)) {
//     $rows[] = $row;
//   }
//   echo json_encode($rows);
//}
?>