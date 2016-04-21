'use strict';

/* Controllers */

var kartotekaControllers = angular.module('kartotekaControllers', []);

kartotekaControllers.controller('UserListCtrl', ['$scope', 'User', /*'Data',*/
  function($scope, User/*, Data*/) {
    $scope.users_list = User.query(
      function(data){
       var i = 0;
       angular.forEach(data, function(v,k) { data[k]._id = i++; 
       });
     }
     );
    // $scope.groupgroup = Data('group');
    $scope.orderProp = 'id';
    $scope.layout ='list';
    $scope.imageUrl ="img/user_photo/u3.gif";
    $scope.users_group = ["Manager", "Designer","Programmer", "Tester", "Other staff"];
  }]);


kartotekaControllers.controller('AuthCtrl', ['$scope', 
  function($scope) {
    
  }]);

