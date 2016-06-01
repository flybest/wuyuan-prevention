<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST, GET");
header("Access-Control-Allow-Headers: x-requested-with");
//echo "{err:'ok',token:'token123456'}";

$farmer1 = array('id'=>'a'.rand(100000,999999), 'name'=>'张三', 'addr'=>'隆兴昌镇乌兰村北路12号', 'tel'=>'13811100222', 'animal'=>'牛20头', 'img'=>'http://'.$_SERVER['HTTP_HOST'].'/wuyuan-prevetion/server/img/muwu.jpg');
$farmer2 = array('id'=>'a'.rand(100000,999999), 'name'=>'李四', 'addr'=>'隆兴昌镇乌兰村北路12号', 'tel'=>'13811100222', 'animal'=>'牛20头', 'img'=>'http://'.$_SERVER['HTTP_HOST'].'/wuyuan-prevetion/server/img/muwu.jpg');
$farmer3 = array('id'=>'a'.rand(100000,999999), 'name'=>'王五', 'addr'=>'隆兴昌镇乌兰村北路12号', 'tel'=>'13811100222', 'animal'=>'牛20头', 'img'=>'http://'.$_SERVER['HTTP_HOST'].'/wuyuan-prevetion/server/img/muwu.jpg');
$farmer4 = array('id'=>'a'.rand(100000,999999), 'name'=>'赵六', 'addr'=>'隆兴昌镇乌兰村北路12号', 'tel'=>'13811100222', 'animal'=>'牛20头', 'img'=>'http://'.$_SERVER['HTTP_HOST'].'/wuyuan-prevetion/server/img/muwu.jpg');
$farmer5 = array('id'=>'a'.rand(100000,999999), 'name'=>'陈七', 'addr'=>'隆兴昌镇乌兰村北路12号', 'tel'=>'13811100222', 'animal'=>'牛20头', 'img'=>'http://'.$_SERVER['HTTP_HOST'].'/wuyuan-prevetion/server/img/muwu.jpg');
$farmer6 = array('id'=>'a'.rand(100000,999999), 'name'=>'宋八', 'addr'=>'隆兴昌镇乌兰村北路12号', 'tel'=>'13811100222', 'animal'=>'牛20头', 'img'=>'http://'.$_SERVER['HTTP_HOST'].'/wuyuan-prevetion/server/img/muwu.jpg');
$farmerArray = array($farmer1,$farmer2,$farmer3,$farmer4,$farmer5,$farmer6);
$result = array('err' => 'ok', 'requestCount'=>10, 'respondCount'=>6, 'farmers' => $farmerArray);
echo json_encode($result);
?>