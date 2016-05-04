'use strict';

/* Services */

var kartotekaServices = angular.module('kartotekaServices', []);

kartotekaServices.factory('User', [
  '$firebase', '$firebaseArray', 
  function( $firebase, $firebaseArray) {
    
    var firebaseObj = new Firebase("https://incandescent-heat-1602.firebaseio.com/suplers");
    
    var users_list = $firebaseArray(firebaseObj);
    return users_list;
  }
  
  ]);

