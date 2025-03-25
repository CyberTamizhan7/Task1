<?php

	include 'connection.php';
	
	$db_name = "Bookify";

	$q_create_db = "CREATE DATABASE IF NOT EXISTS $db_name";

	if($conn->query($q_create_db) === False){
		echo("Error : Database Creation");
	}

	$conn->select_db($db_name);

	$q_create_table = "CREATE TABLE IF NOT EXISTS Books (
				SNo INT UNIQUE, 
				Book_Name VARCHAR(255) UNIQUE,
				Price INT UNIQUE);";

	if($conn->query($q_create_table) === False){
		echo("Error : Books Table Creation");
	}

	$q_insert_data = "INSERT IGNORE INTO Books VALUES
				(1,'The Killer Dutch',100),
				(2,'My Great Predecessors',200),
				(3,'Silman\'s Endgame Course',300);";
	
	if($conn->query($q_insert_data) === False){
		echo("Error : Data Insertion");
	}


?>