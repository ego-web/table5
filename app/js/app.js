'use strict';
$.material.init();

/* App Module */

var kartotekaApp = angular.module('kartotekaApp', [
  'angularUtils.directives.dirPagination'
  ,'ngRoute'
  ,'firebase'
  ,'kartotekaControllers'
  ,'kartotekaServices'
  ,'ngMaterial'
  ,'ngAnimate'
  ,'ngAria'
]);

kartotekaApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/users', {
        templateUrl: 'partials/body.html',
        controller: 'AddPostCtrl'
      }).
      otherwise({
        redirectTo: '/users' 
      });
  }]);
