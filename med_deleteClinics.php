<?php
mysql_connect('localhost','medicard','m0b33l1ty') or die("Unable to connect"); 
@mysql_select_db('medicard_dev') or die( "Unable to select database");

$query="DELETE FROM mcard_clinics WHERE clinic_id = " . $_POST["clinic_id"] . ";";
mysql_query($query);
mysql_close();
header('Location: med_clinics.html');
exit;
?>
