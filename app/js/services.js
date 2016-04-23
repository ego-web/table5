'use strict';

/* Services */

var kartotekaServices = angular.module('kartotekaServices', ['ngResource']);

kartotekaServices.factory('User', ['$resource',
  function($resource){
    return $resource('users/supplier_list.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }
   ]);

