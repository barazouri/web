<?php
include('db.php');

	$query = "SELECT * FROM easy_park_db";
	$result = mysqli_query($conn, $query);
	if(!$result) {
		die("DB query failed select.");
	}
	
	if((isset($_POST["time"])) && (isset($_POST["date"])) && (isset($_POST["address"])))
	{
		$time = $_POST["time"];
		$date = $_POST["date"];
		$address = $_POST["address"];

		$query1 = "INSERT INTO easy_park_db (time_park, date_park, address_park)
		VALUES ('$time', '$date', '$address')";
		$result = mysqli_query($conn, $query1);

		if(!$result){
			die("DB query failed. insert");
		}

		$query1 = "SELECT * FROM easy_park_db";
		$result = mysqli_query($conn, $query1);

		if(!$result){
			die("DB query failed. ");
		}
		
	}
	else if(isset($_POST["id_park"]))
	{
		$id_park = (int)$_POST["id_park"];
		$query2= "DELETE FROM easy_park_db WHERE id_park = '$id_park'";
		$result = mysqli_query($conn, $query2);
		if(!$result){
			die("DB query failed. delete");
		}

		$query2 = "SELECT * FROM easy_park_db"; 
		$result = mysqli_query($conn, $query2);

		if(!$result){
			die("DB query failed. ");
		}
	}
	$i=1;
	echo '<ol id="parks">';
	while($row = mysqli_fetch_assoc($result)){
			echo "<li> <button id='$row[id_park]' class='delete' type='button'> <i class='fa fa-trash' aria-hidden='true'></i></button><h2>".'time:' .$row["time_park"].'<br>'.'date: ' .$row["date_park"].'<br>'. 'address: ' .$row["address_park"].'<br>'.'<br>'."</h2></li>";
			$i++;
		}
	echo "</ol>";
		
	mysqli_free_result($result);	
	mysqli_close($conn);
?>