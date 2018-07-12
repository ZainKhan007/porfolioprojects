var app = angular.module("myApp",["ngRoute","ngStorage"]);

app.config(["$routeProvider",function($routeProvider) {
  $routeProvider.when('/login',{
    templateUrl: "views/login.html",
	controller: "LoginCtrl"
  }).when('/post',{
    templateUrl: "views/post.html",
	  controller: "PostCtrl"
  }).when('/cms',{
    templateUrl: "views/cms.html",
	  controller: "CmsCtrl"
  }).when('/404',{
    templateUrl: "views/404.html",
	  controller: "NFCtrl"
  }).otherwise({redirectTo:'/login'});
}]);
