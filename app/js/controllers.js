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
 }

 ]);


kartotekaControllers.controller('PaginatorCtrl', ['$scope',  
  function($scope) {
    $scope.boundaryLinks = true,
    $scope.maxSize = 3,
    $scope.itemsPage = 10;
  }
  ]);

kartotekaControllers.controller('CheckCtrl', ['$scope', '$filter', 
  function($scope, $filter) {

    $scope.chkbxs = [
    {label:"ID", val:false, name:'id' },
    {label:"ФИО", val:false, name:'name' },
    {label:"КОМПАНИЯ", val:false, name:'company' },
    {label:"ИНН", val:false, name:'inn' },
    {label:"КОЛ.ТОВАРА", val:false, name:'amount' },
    {label:"СР.ЧЕК", val:false, name:'arpu' },
    {label:"ПЕРИОД ПОСТАВКИ", val:false, name:'period' },
    {label:"E-MAIL", val:false, name:'email' }
    ];

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

/*kartotekaControllers.controller("SampleCtrl", function($scope, $firebaseObject) {
  var ref = new Firebase("https://incandescent-heat-1602.firebaseio.com/users");

  $scope.data = $firebaseObject(ref);
  // console.log($scope.data.id)

  $scope.reset = function() {

    ref.$set({
      monday: {
        name: 'Monday',
        slots: {
          fpart: {time: '9:00am',booked: false},
          spart: {time: '11:00am', booked: false}
        }
      },
      tuesday: {
        name: 'Tuesday', 
        slots: {
          fpart: {time: '9:00am', booked: false},
          spart: {time: '11:00am', booked: false}
        }
      }
    });

  };

});*/
      kartotekaControllers.controller('AddPostCtrl', ['$scope', '$firebase', function($scope, $firebase) {

        var firebaseObj = new Firebase("https://incandescent-heat-1602.firebaseio.com/suplers");

        $scope.ReadPost = function() {
          firebaseObj.on("child_added", function(snap, prevChildKey) {
            var newPost = snap.val();
            var num = snap.key();
            // n= parseFloat(n)
             // console.log("key: " + n);
           var id = newPost.id;
           var name = newPost.name;
           var company = newPost.company;
           var inn = newPost.inn; 
           var amount = newPost.amount; 
           var arpu = newPost.arpu; 
           var period = newPost.period; 
           var email = newPost.email;

         }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        });
        };

        $scope.AddPost = function() {
          var length = $scope.users_list.length+1;
          var num = "Person "+length;

           var id = $scope.article.id;
           var name = $scope.article.name;
           var company = $scope.article.company;
           var inn = $scope.article.inn; 
           var amount = $scope.article.amount; 
           var arpu = $scope.article.arpu; 
           var period = $scope.article.period; 
           var email = $scope.article.email;

          firebaseObj.set({
            [length]:{
              num: num,
              id: id,
              name: name,
              company:company,
              inn:inn,
              amount: amount,
              arpu: arpu,
              period: period,
              email: email
            }

          });
          }
        }]);
