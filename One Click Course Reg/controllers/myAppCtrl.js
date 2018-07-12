var app = angular.module('myApp');

app.controller("MyAppCtrl",["$scope","$location","$http","$localStorage","data",
function($scope,$location,$http,$localStorage,data) {
  var session = angular.fromJson($localStorage.session);
  if(session){
    $location.path('/registration');
  }
  $scope.Login = function(){
		if($scope.enroll != null && $scope.pass != null){
      data.dataService($scope.enroll,$scope.pass).then(function (response) {
        var info = response.data.student[0];
        var stdEnroll = info["std_enrollment"];
        if (stdEnroll == $scope.enroll) {
          var myObj = createSession(stdEnroll,$scope.pass);
					$localStorage.session = angular.toJson(myObj);
          $location.path('/registration');
        }
      })
		}
		else{
			return false;
		}
	}
  var createSession = function(enroll,pass){
		var myObj = {
						enrollment: enroll,
            password:pass,
						loggedIn: true
					}
		if(myObj){
			return myObj;
		}
		return "";
	}
}]);
