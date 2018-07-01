var app = angular.module('myApp');

app.factory("data",["$http",function($http) {
    return{
      dataService : function (enroll,pass) {
        return $http.post('PHP/main.php',{'enroll': enroll,'pass':pass})
    }
  }
}]);
