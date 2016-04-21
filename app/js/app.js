'use strict';

/* App Module */

var kartotekaApp = angular.module('kartotekaApp', [
  'ngRoute',
  'firebase',
  'kartotekaControllers',
  'kartotekaFilters',
  'kartotekaServices'
]);

kartotekaApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/intro.html',
         controller: 'AuthCtrl'
      }).
      when('/users', {
        templateUrl: 'partials/user-list.html',
        controller: 'UserListCtrl'
      }).
      otherwise({
        redirectTo: '/' 
      });
      // $locationProvider.hashPrefix('!');
  }]);
