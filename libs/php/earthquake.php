<?php

$url = "http://api.geonames.org/findNearbyPlaceNameJSON?lat=".$_GET['lat']."&lng=".$_GET['lng']."&username=".$_GET['username'];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);


$result = curl_exec($ch);
curl_close($ch);

$decode = json_decode($result, true);

echo json_encode($output);


?>