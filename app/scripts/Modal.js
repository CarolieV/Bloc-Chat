(function() {
  function Modal($firebaseArray) {
    var modal = {};
    var ref = firebase.database().ref().child("modals");
    var modals = $firebaseArray(ref);

    Modal.all = modals;

    Modal.add = function(modal) {
      var list = $firebaseArray(ref);
         $add('modals');
    }


    return Modal;
  }
  var app = angular.module('bloc-chat', []);
app.controller('ModalCtrl', function($scope) {
    $scope.all
});

<div class="Modals" ng-repeat="modals in Modal.all">

  angular
    .module('blocChat')
    .factory('Modal', ['$firebaseArray', Modal]);
})();
