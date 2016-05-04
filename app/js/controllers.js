'use strict';

/* Controllers */
var kartotekaControllers = angular.module('kartotekaControllers', []);

/*kartotekaControllers.controller('UserListCtrl', ['$scope', 'User',

 function($scope, User) {

   $scope.users_list = User.query(
    function(data){
     var i = 0;
     angular.forEach(data, function(v,k) { data[k]._id = i++; 
     });
   }
   );
 }

 ]);*/


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
  
  kartotekaControllers.controller('AddPostCtrl', ['$scope', '$firebase', '$firebaseArray', 'User', function($scope, $firebase, $firebaseArray, User) {

/*        var firebaseObj = new Firebase("https://incandescent-heat-1602.firebaseio.com/suplers");
        $scope.users_list = $firebaseArray(firebaseObj);*/

/*        $scope.ReadPost = function() {
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
        };*/
    $scope.aid ='';

       $scope.clearInput = function (){
              $scope.aid= "",
              $scope.aname= "",
              $scope.acompany= "",
              $scope.ainn= "",
              $scope.aamount= "",
              $scope.aarpu= "",
              $scope.aperiod= "",
              $scope.aemail= ""            
          };
       $scope.checkInput = function (){
console.log($scope.a)
 $scope.aid ='3333';
       }
$scope.users_list = User;
        $scope.AddPost = function() {
          var length = $scope.users_list.length+1;
          $scope.users_list.$add({
              id: $scope.aid,
              name: $scope.aname,
              company:$scope.acompany,
              inn:$scope.ainn,
              amount: $scope.aamount,
              arpu: $scope.aarpu,
              period: $scope.aperiod,
              email: $scope.aemail
          }).then($scope.clearInput());
          }
        }]);

  kartotekaControllers.controller('AppCtrl', ['$scope', '$timeout', '$mdSidenav', '$log',
  function ($scope, $timeout, $mdSidenav, $log) {
    $scope.toggleRight = buildDelayedToggler('right');
    $scope.toggleLeft = buildToggler('left');
    $scope.isOpenLeft = function(){
      return $mdSidenav('left').isOpen();
    };
    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */

     $scope.postEdit =function (){
$scope.toggleLeft()
console.log($scope.user)

         };

    function debounce(func, wait, context) {
      var timer;
      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }
    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
      return debounce(function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }, 200);
    }
    function buildToggler(navID) {

      return function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            console.log("aname "+$scope.aname)
/*            var obj=$mdSidenav(navID);
            var FRAM = obj.getElementById("id");
            console.log(FRAM)*/
                        // console.log($mdSidenav(navID).form)
            // $log.debug("toggle " + navID + " is done");
            // $scope.aid="22222";
          /* console.log(aid)
            console.log($scope.user.name)
            console.log($scope.user.company)
            console.log($scope.user.inn)
            console.log($scope.user.amount)
            console.log($scope.user.arpu)
            console.log($scope.user.period)
            console.log($scope.user.email)
               $scope.aid=$scope.user.id,
              $scope.aname=$scope.user.name,
              $scope.acompany=$scope.user.company,
              $scope.ainn=$scope.user.inn,
              $scope.aamount=$scope.user.amount,
              $scope.aarpu=$scope.user.arpu,
              $scope.aperiod=$scope.user.period,
              $scope.aemail=$scope.user.email*/
            });
      }
    }
  }]);
  kartotekaControllers.controller('LeftCtrl', ['$scope', '$timeout', '$mdSidenav', '$log',
    function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $scope.clearInput();
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });
    };
  }]);
  kartotekaControllers.controller('RightCtrl', ['$scope', '$timeout', '$mdSidenav', '$log',
    function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
            $scope.clearInput();
$mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };
  }]);