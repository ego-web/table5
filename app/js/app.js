'use strict';

/* App Module */

var kartotekaApp = angular.module('kartotekaApp', [
  'angularUtils.directives.dirPagination',
  'ngRoute',
  'firebase',
  'kartotekaControllers',
  'kartotekaServices'
 /* ,
  'ngMaterial',
  'ngAnimate',
  'ngAria'*/
]);

kartotekaApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/users', {
        templateUrl: 'partials/user-list.html',
        controller: 'UserListCtrl'
      }).
      otherwise({
        redirectTo: '/users' 
      });
  }]);
