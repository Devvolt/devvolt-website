<?php

$serverName = "localhost";
$dBUsername = "root";
$dBPassword = "";
$dbName = "website";

$conn = mysqli_connect($serverName, $dBUsername, $dBPassword, $dbName);

if (!$conn) {
    die("Connessione fallita: " . mysqli_connect_error());
    
}