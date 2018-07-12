var app = angular.module("myApp");

app.controller("CmsCtrl",["$scope","$http",
                function($scope,$http) {
    $http.get('/api/cms/posters').then(function(response) {
      var posts = angular.fromJson(response.data);
	  var showPost = [];
	  for(var i = 0; i < 6; i++){
		  showPost.push(posts[i]);
	  }
	  $scope.post = showPost;
    });
}]);
