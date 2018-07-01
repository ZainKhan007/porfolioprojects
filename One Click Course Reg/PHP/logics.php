<?php
include 'config/database.php';


class logics
{
	public $student_enrollmentt;
	public $program;
	public $new_sem;
	public $count;
	public $courseArray = array();
	public $mysem;
	public $myen;
	public $database;
	public $reg;
	public $regD;
	public $stdd;
	public $password;
	public function __construct()
	{
		 $this->database = new Database();
	}
	public function getStudent($en,$pass)
	{
		$this->student_enrollment = $en;
		$student = "select * from students where std_enrollment  =  '$en' AND password = '$pass'";

		$result = $this->database->select($student);

 	if($result)
 	{
 		$value = $result->fetch_object();
 		$this->program = $value->std_program;
 		return true;
 	//	echo "<br>".$program;
 		//print_r($result->fetch_object());
 	}
 	else
 	{
 		return false;
 	}

	}



	public function selectSemseter()
	{

	$slectsemester = "SELECT MAX(semester) as sem FROM result_details WHERE std_enrollment = '$this->student_enrollment'";
	$result2 = $this->database->select($slectsemester);
 	if($result2)
 	{
 		$value2 = $result2->fetch_object();
 	  	//$semseters = $value2;
 	  	//echo $semseters->semester;
 		$current_sem=$value2->sem;
 		//echo "<br>".$current_sem;
 		if($current_sem<8)
 		{

 			$this->new_sem = $current_sem+1;


 		}
 	}
 	else
 	{
 		$this->new_sem = 1;
 	}
	}


	public function selectRoadMap()
	{
		$s = $this->new_sem;

		$selectroadmap = "SELECT * from road_map WHERE semester = '$s'";
		$result3 = $this->database->select($selectroadmap);
 		if($result3)
 		{
 			//echo "roadmap";
 			while($courses = $result3->fetch_assoc())
 			{

 				$course_id = $courses['couse_code'];
 				$prereq = $courses['pre_req_course_code'];
 				if($prereq!='')
 				{
 					//echo "<br>in pre req";
 					//echo "<br>".$prereq;
 					$co = $prereq;
 					$selectGrade = "SELECT * from result_details where course_code='$co'";
 					$result4 = $this->database->select($selectGrade);
 					if($result4)
 					{
 						$grade = $result4->fetch_object()->status;
 						//echo "grade is ". $grade;
 						if($grade !='F' && $grade !='I')
 						{
 							$this->courseArray[] = $course_id;
 							/*



 							$RegRes = $database->insert($intertReg);
 							$date = date("Y/m/d");
 							*/
 							$Scourses = "select * from courses where course_code ='$course_id'";
 							$result5 = $this->database->select($Scourses);
 						   $credit_hours = $result5->fetch_object()->credit_hours;

 						    $this->count += $credit_hours;

 						}


 					}

 				}
 				else
 				{
 					$Scourses = "select * from courses where course_code ='$course_id'";
 					$result5 = $this->database->select($Scourses);
 					$credit_hours = $result5->fetch_object()->credit_hours;

 					$this->count += $credit_hours;
 					$this->courseArray[] = $course_id;
 				}

 			}

 		}


	}

	public function getReg()
	{
			$result56 = $this->database->select("SELECT * FROM `registration`");
 			if($result56)
 			{

 				while ($value = $result56->fetch_assoc()) {
 					# code...
 					$this->myen = $value['std_enrollment'];;
				   $this->mysem = $value['std_semester'];

				  // echo $mysem;
				  // echo $myen;

 				}
 				return true;


 			}
 			else
 			{
 				return false;
 			}
	}

	public function Register()
	{
			if($this->student_enrollment == $this->myen && $this->new_sem == $this->mysem)
 			{
 				return false;
 			}
 			else
 			{

 				$status = 'Registered';
 				$date = $date = date("Y/m/d");
 				$insertReg = "INSERT into registration (std_enrollment,reg_date,total_hours,std_semester,program,status) VALUES ('$this->student_enrollment','$date','$this->count','$this->new_sem','$this->program','$status')";

				$final1 = $this->database->insert($insertReg);


				return true;
 			}
	}


	public function regDetails()
	{
	$selectRegId = "Select reg_id from Registration where std_enrollment = '$this->student_enrollment' and std_semester = '$this->new_sem'";
	$r = $this->database->select($selectRegId);
	//fetch object and fetch assoc differece
	$length = count($this->courseArray);
 			//echo $length;
 			$reg_id = $r->fetch_object()->reg_id;
 			for ($i=0; $i < $length; $i++)
 			{

 				//echo "course_code".$course_code;
 				$course_id = $this->courseArray[$i];
 				$insertRegDetails= "INSERT into reg_details (reg_id,couse_code) VALUES ('$reg_id','$course_id')";
				$final2 = $this->database->insert($insertRegDetails);
 				//echo "<br>".$courseArray[$i];
 			}

	}


	public function selectFinal()
	{
		$selectReg = "Select * from Registration where std_enrollment = '$this->student_enrollment' and std_semester = '$this->new_sem'";
		$final2 = $this->database->select($selectReg);
		//$this->reg = $final2->fetch_assoc();
		//$reg_id = $final2->fetch_object()->reg_id;
		while ($val =$final2->fetch_assoc()) {
			$this->reg[]= $val;
			$reg_id = $val['reg_id'];
		}

		//$reg_id2 = $final2->fetch_object()->reg_id;
		//echo $reg_id;
		$selectdet = "select * from reg_details where reg_id = '$reg_id'";
		$final3 = $this->database->select($selectdet);
		while ($val= $final3->fetch_assoc()) {
			$this->regD[] = $val;
		}


		$selectst = "select * from students where std_enrollment = '$this->student_enrollment'";
		$fn = $this->database->select($selectst);
		while ($val = $fn->fetch_assoc()) {
			$this->stdd[] = $val;
		}



	}



}


 ?>
