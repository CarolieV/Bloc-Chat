(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    Room.add = function(room) {
      var list = $firebaseArray(ref);
         $add('rooms');
    }


    return Room;
  }
  var app = angular.module('bloc-chat', []);
app.controller('RoomCtrl', function($scope) {
    //array of objects retrieved by the all method
    $scope.all
});

<div class="Rooms" ng-repeat="rooms in Room.all">
</div>
 //not sure if correct and where to put it

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
