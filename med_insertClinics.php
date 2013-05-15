<?php
mysql_connect("localhost","root","");
mysql_select_db('medicard_dev');
$query="INSERT INTO mcard_clinics (name, priority, clinicHours, latitude, longitude, landline, city) VALUES('".$_POST["name"]."', '".$_POST["priority"]."', '".$_POST["clinicHours"]."', '".$_POST["latitude"]."', '".$_POST["longitude"]."', '".$_POST["landline"]."', '".$_POST["city"]."')";
$result=mysql_query($query);
if($result==FALSE) {
die('ERROR DARYLL'.mysql_error());
}
mysql_close();
header('Location: med_clinics.html');
exit ;

?>