var app = angular.module('myApp');

app.controller("RegCtrl",["$scope","$location","$localStorage","data",
function($scope,$location,$localStorage,data) {
  var  enr,pass;
  var session = angular.fromJson($localStorage.session);
	loggedIn = false;

	if(session){
		loggedIn = session.loggedIn;
    enr = session.enrollment;
    pass = session.password;
	}

	if(!loggedIn){
		$location.path("/login");
	}
  else{
    data.dataService(enr,pass).then(function(response) {
        $scope.student = response.data.student[0];
        $scope.semester = response.data.registration[0];
        $scope.regD = response.data.registrationD;
    })
  }
		$scope.Logout = function(){
			destroySession();
			$location.path("/login");
		}
  var destroySession = function(){
		$localStorage.session = null;
	}


}]);
