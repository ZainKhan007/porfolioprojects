'use strict';

angular.module('myContacts.contacts', ['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'ContactsCtrl'
  });
}])

.controller('ContactsCtrl', ['$scope','$firebaseArray',function($scope,$firebaseArray) {

  var config = {
      apiKey: "AIzaSyA_z8kq3WbRKkg2XmzIvKPXIg1qdKIDyhk",
      authDomain: "contactsapp-927dc.firebaseapp.com",
      databaseURL: "https://contactsapp-927dc.firebaseio.com"

    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }

      var rootRef = firebase.database().ref();
      $scope.contacts = $firebaseArray(rootRef);
      $scope.showAddForm = function () {
        $scope.addFormShow = true;
      }
      $scope.showEditForm = function (contact) {
        console.log(contact)
        $scope.editFormShow = true;
        $scope.id = contact.$id;
        $scope.name = contact.name;
        $scope.email = contact.email;
        $scope.company = contact.company;
        $scope.wPhone = contact.phones.wPhone;
        $scope.mPhone = contact.phones.mPhone;
        $scope.hPhone = contact.phones.Home;
        $scope.sAddress = contact.address.sAddress;
        $scope.city = contact.address.city;
        $scope.state = contact.address.state;
        $scope.zipCode = contact.address.zipCode;
      }
      $scope.hide = function () {
        $scope.addFormShow = false;
        $scope.contactShow = false;
      }
      $scope.addFormSubmit = function() {
        if ($scope.name) { var name = $scope.name; }else { var name = null; }
        if ($scope.email) { var email = $scope.email; }else { var email = null; }
        if ($scope.company) { var company = $scope.company; }else { var company = null; }
        if ($scope.wPhone) { var wPhone = $scope.wPhone; }else { var wPhone = null; }
        if ($scope.mPhone) { var mPhone = $scope.mPhone; }else { var mPhone = null; }
        if ($scope.hPhone) { var hPhone = $scope.hPhone; }else { var hPhone = null; }
        if ($scope.sAddress) { var sAddress = $scope.sAddress; }else { var sAddress = null; }
        if ($scope.city) { var city = $scope.city; }else { var city = null; }
        if ($scope.state) { var state = $scope.state; }else { var state = null; }
        if ($scope.zipCode) { var zipCode = $scope.zipCode; }else { var zipCode = null; }

        $scope.contacts.$add({
          name:name,
          email:email,
          company:company,
          phones:{
            mPhone:mPhone,
            Home:hPhone,
            wPhone:wPhone
          },
          address:{
            sAddress:sAddress,
            city:city,
            state:state,
            zipCode:zipCode
          }
        }).then(function(ref) {
          clearFields();
          $scope.addFormShow = false;
          $scope.msg = "Contact Added!";
        })
      }

      $scope.editFormSubmit= function() {
        var id = $scope.id;

        var record = $scope.contacts.$getRecord(id);

        record.name = $scope.name;
        record.email = $scope.email;
        record.company = $scope.company;
        record.phones.wPhone = $scope.wPhone;
        record.phones.Home = $scope.hPhone;
        record.phones.mPhone = $scope.mPhone;
        record.address.sAddress = $scope.sAddress;
        record.address.city = $scope.city;
        record.address.state = $scope.state;
        record.address.zipCode = $scope.zipCode;

        $scope.contacts.$save(record).then(function(rootRef) {
          console.log(rootRef.key);
        });

        $scope.clearFields();
        $scope.editFormShow = false;

        $scope.msg = "Contact Updated";
      }

      $scope.showContact = function(contact) {
        $scope.name = contact.name;
        $scope.email = contact.email;
        $scope.company = contact.company;
        $scope.wPhone = contact.phones.wPhone;
        $scope.mPhone = contact.phones.mPhone;
        $scope.hPhone = contact.phones.Home;
        $scope.sAddress = contact.address.sAddress;
        $scope.city = contact.address.city;
        $scope.state = contact.address.state;
        $scope.zipCode = contact.address.zipCode;

        $scope.contactShow = true;
      }

      $scope.removeContact = function (contact) {

        $scope.contacts.$remove(contact);

        $scope.msg ="Contact Removed!"
      }
      $scope.clearFields = function () {
        $scope.name = "";
        $scope.email = "";
        $scope.company = "";
        $scope.wPhone = "";
        $scope.mPhone = "";
        $scope.hPhone = "";
        $scope.sAddress = "";
        $scope.city = "";
        $scope.state = "";
        $scope.zipCode = "";
      }

}]);
