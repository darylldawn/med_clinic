<?php
mysql_connect('localhost','medicard','m0b33l1ty') or die("Unable to connect");
@mysql_select_db('medicard_dev') or die("Unable to select database");
$query="SELECT * from mcard_clinics";
$result=mysql_query($query);
$rows=array();
while($r=mysql_fetch_assoc($result)) {
$rows[]=$r;
}
print "{\"cont\":".json_encode($rows)."}";
mysql_close();
exit ;
?>
