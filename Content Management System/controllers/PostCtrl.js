var app = angular.module("myApp");
app.controller("PostCtrl",["$scope","$location","$http","$localStorage",
				function($scope,$location,$http,$localStorage){
	var session = angular.fromJson($localStorage.session);
	loggedIn = false;

	if(session){
		loggedIn = session.loggedIn;
	}
	if(!loggedIn){
		$location.path("/login");
	}
	else{
		$scope.header = session.header;
		$scope.LogOut = function(){
			destroySession();
			$location.path("/login");
		}
	}
	var destroySession = function(uname,name){
		$localStorage.session = null;
	}

	$scope.Post = function(arg){
		console.log("we are in controller");
		if($scope.eventname != null && $scope.description != null){
			var postObj = {
						 "posted_by":session.username,
						 "event":$scope.eventname ,
						 "description": $scope.description,
					 };
			$http.post("/api/post",{"basic": postObj,form:new FormData(this)}).then(function(response) {

			})
		}
	}
}]);

$(document).ready(function(e) {
	$("#post").on('submit',function(e) {
		e.preventDefault();
				$.ajax({
               url: "/api/uploadimage",
               type: "POST",
               data: new FormData(this),
               contentType: false,
               cache: false,
               processData:false,
               success: function(data){}
             });
	})
});
