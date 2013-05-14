<?php
mysql_connect('localhost','medicard','m0b33l1ty') or die("Unable to connect"); 
@mysql_select_db('medicard_dev') or die( "Unable to select database");

$query = "UPDATE mcard_clinics SET name = '".$_POST["name"]."', priority = '".$_POST["priority"]."', clinicHours = '".$_POST["clinicHours"]."', latitude = '".$_POST["latitude"]."', longitude = '".$_POST["longitude"]."', landline = '".$_POST["landline"]."', city = '".$_POST["city"]."'   WHERE clinic_id = '".$_POST["clinic_id"]."'";
$result = mysql_query($query);
mysql_close();
header('Location: news.html');
exit;
?>
