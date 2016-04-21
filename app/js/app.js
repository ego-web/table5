'use strict';

/* App Module */

var kartotekaApp = angular.module('kartotekaApp', [
  'ngRoute',
  'kartotekaControllers',
  'kartotekaFilters',
  'kartotekaServices'
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
