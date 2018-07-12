var app = angular.module("myApp",["ngRoute","ui.mask","ngStorage"]);

app.config(["$routeProvider",function($routeProvider) {
  $routeProvider.when('/login',{
    templateUrl: "views/login.html",
    controller: "MyAppCtrl"
  }).when('/registration',{
    templateUrl: "views/registration.html",
    controller: "RegCtrl"
  }).otherwise({redirectTo:'/login'});
}]);
