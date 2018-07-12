<?php
include 'logics.php';
$user=json_decode(file_get_contents('php://input'));

$val = $user->enroll;
$val1 = $user->pass;
$regd =array();
$regdd = array();




$logic = new logics();

$logic->getStudent($val,$val1);
//echo $logic->program;

$logic->selectSemseter();
//echo $logic->new_sem;

$logic->selectRoadMap();
//echo $logic->count;

$logic->getReg();

	  if($logic->Register())
	  {
	  	//echo "registered successfully";
	  	$logic->regDetails();
	  }
	  else
	  {
	  	//echo "sorry u are alreay registered";

	  }


$logic->selectFinal();
$regd['registration'] = $logic->reg;
$regd['registrationD'] = $logic->regD;
$regd['student'] = $logic->stdd;
echo json_encode($regd);


 ?>
