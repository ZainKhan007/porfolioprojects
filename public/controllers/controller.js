angular.module("App",[])
  .controller("AppCtrl",function($scope,$http) {

    $scope.addContact = function() {
      $http.post("/addcontact",$scope.contact).then(function(res) {
        $scope.refresh();
        $scope.contact = "";
      })
    }

    $scope.remove = function(id) {
      $http.delete("/removecontact/"+id).then(function(res) {
        $scope.refresh();
      })
    }
    $scope.edit = function(id) {
      $http.get("/editcontact/"+id).then(function(response) {
        $scope.contact = response.data;
        $scope.refresh();
      })
    }
    $scope.update = function() {
      $http.put("/updatecontact/"+$scope.contact._id,$scope.contact).then(function(response) {
        $scope.contact = response.data;
        $scope.refresh();
        $scope.contact = "";
      })
    }
    $scope.clear = function() {
      $scope.contact = "";
    }
    $scope.refresh = function() {
      $http.get('/contactlist').then(function(response) {
        $scope.contactlist = response.data;
      })
    }
    $scope.refresh();
  })
