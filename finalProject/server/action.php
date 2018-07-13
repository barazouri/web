<?php
	$dbhost = "182.50.133.51";
	$dbuser = "studDB18A";
	$dbpass = "stud18aDB1!";
	$dbname = "studDB18A";
	$conn =  mysqli_connect ($dbhost, $dbuser, $dbpass, $dbname);
	if (!$conn) {
		die("Connection failed: " . mysqli_connect_error());
	}

	$query = "SELECT * FROM easy_park_db order by time";
	$result = mysqli_query($conn, $query);
	if(!$result){
		die("DB query failed.");
	}
	if(isset(($_POST["time"]))&& isset($_POST["date"]) && isset($_POST["address"]))
	{
		$time = $_POST["time"];
		$date = $_POST["date"];
		$address = $_POST["address"];

		$query1 = "INSERT INTO easy_park_db (time_park, date_park, address_park)
		VALUES ('$time', '$date', '$address')";
		$result = mysqli_query($connection, $query1);

		if(!$result){
			die("DB query failed.");
		}

		$query1 = "SELECT * FROM easy_park_db order by time";
		$result = mysqli_query($connection, $query1);

		if(!$result){
			die("DB query failed.");
		}
		
	}
	echo "<ul";
	while($row = mysqli_fetch_assoc($result)){
			echo "<li><h2>" .'time:' .$row["time_park"]. 'date:' .$row["date_park"]. 'address:' .$row["address_park"]."</h2></li>";
		}
	echo "</ul>";
		
	mysqli_free_result($result);	
	mysqli_close($conn);
?>