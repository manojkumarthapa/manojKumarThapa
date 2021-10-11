<?php

$url = "http://api.geonames.org/weatherJSON?north=".$_GET['north']."&south=".$_GET['south']."&east=".$_GET['east']."&west=".$_GET['west']."&username=".$_GET['username'];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);


$result = curl_exec($ch);
curl_close($ch);

$decode = json_decode($result, true);
// $output['data'] = $decode['weatherObservations'];

echo json_encode($output);


?>