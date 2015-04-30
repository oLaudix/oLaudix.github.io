<?php
$url = 'http://www.wowhead.com/item=49623&xml';
$xml = simplexml_load_string(file_get_contents($url));
$json = '{'.$xml->item->jsonEquip.'}';
var_dump(json_decode($json, true));
?>