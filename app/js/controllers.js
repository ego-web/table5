'use strict';

/* Controllers */
var kartotekaControllers = angular.module('kartotekaControllers', []);

kartotekaControllers.controller('UserListCtrl', ['$scope', 'User',
 
  function($scope, User) {
    $scope.users_list = User.query(
      function(data){
       var i = 0;
       angular.forEach(data, function(v,k) { data[k]._id = i++; 
       });
     }
     );
  }]);


kartotekaControllers.controller('CheckCtrl', ['$scope', '$filter', 
  function($scope, $filter) {
  $scope.sortType     = 'name';
  $scope.sortReverse  = false;  

   $scope.chkbxs = [
   {label:"id", val:false, name:'id' },
   {label:"ФИО", val:false, name:'name' },
   {label:"Компания", val:false, name:'company' },
   {label:"ИНН", val:false, name:'inn' },
   {label:"Кол-во товара", val:false, name:'amount' },
   {label:"Ср. чек", val:false, name:'arpu' },
   {label:"Период поставки", val:false, name:'period' },
   {label:"E-mail", val:false, name:'email' }
   ];
console.log($scope.sortType);
    $scope.sortTypeFun= function(name) {
      $scope.sortType=name;
       $scope.sortReverse = !$scope.sortReverse;
      }
   $scope.bandChoosed = function() {
    var trues = $filter("filter")( $scope.chkbxs , {val:true} );
    var log =[];
    angular.forEach(trues, function(value, key) {
    log.push(value);
    });
    $scope.log = log;
     if (trues.length === 5) return true;
   }
 }]);
