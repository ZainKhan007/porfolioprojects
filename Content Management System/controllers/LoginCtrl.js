var app = angular.module("myApp");
app.controller("LoginCtrl",["$scope","$location","$http","$localStorage",
							function($scope,$location,$http,$localStorage) {
	var session = angular.fromJson($localStorage.session);
	if(session){
		$location.path('/post');
	}
	$scope.GetData = function(){
		email = $scope.email;
		pass = $scope.pass;

		if(email == null || pass == null){
			console.log("please fill out the fields first");
		}
		else{
			$http.post('/api/login').then(function(response){
				$scope.admin = response.data;
				angular.forEach($scope.admin,function(value){
					if(value.email == email && value.pass == pass){
						var myObj = createSession(value.username,value.name);
						$localStorage.session = angular.toJson(myObj);
						$location.path("/post");
					}
				})
			})
		}
	}
}]);
	var createSession = function(uname,name){
		var myObj = {
						username: uname,
						header: name,
						loggedIn: true
					}
		if(myObj){
			return myObj;
		}
		return "";
	}
