<?php

	include 'connection.php';
	include 'creation.php';
	
	$q_fetch_data = "SELECT SNo, Book_Name, Price FROM Books";
	
	$fetched_data = $conn->query($q_fetch_data);

	$data_array = array();

	if($fetched_data->num_rows>0){
		while($row=$fetched_data->fetch_assoc()){
			$data_array[] = $row;
		}
	}

	echo json_encode($data_array);
	
	$conn->close();			

?>