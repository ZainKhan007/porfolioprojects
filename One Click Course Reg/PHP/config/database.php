<?php
include 'config.php';
 ?>

 <?php
/**
*
*/
class Database
{
	public $host = DB_HOST;
	public $user = DB_USER;
	public $pass = DB_PASS;
	public $dbname = DB_NAME;
	public $conn;
	public $error;
	public $e;
	public $s;
	public function __construct()
	{
		$this->connect();
	}

	public function connect()
	{
		$this->conn = new Mysqli($this->host,$this->user,$this->pass,$this->dbname);


	}

public function select($query)
	{
		$result = $this->conn->query($query) or die($this->conn->error);
		if($result->num_rows > 0)
		{
			return $result;

		}
		else
		{
			return false;
		}
	}
	public function insert($query)
	{
		  $insert = $this->conn->query($query) or die($this->conn->error);
		  if($insert)
		  {
		  	return $insert;
		  }
		  else
		  {
		  	return false;
		  }

	}

	public function update($query)
	{
		$update = $this->conn->query($query) or die($this->conn->error);
		  if($result)
		  {
		  	return $update;
		  }
		  else
		  {
		  	return false;
		  }
	}

	public function delete()
	{
		$delete = $this->conn->query($query) or die($this->conn->error);
		if($delete)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	public function validation($enroll, $sem)
	{
		$validate = $this->conn->query("select std_enrollment,semester from registration");
		if($validate)
		{
			$en1 = $validate->fetch_assoc();
			$en = $en1['std_enrollment'];
		$se1 = $validate->fetch_assoc();
		$se = $se1['semester'];

		if($enroll == $en && $sem == $se)
		{

			return false;
		}
		else

		{
			return true;
		}
		}

	}

}
  ?>
