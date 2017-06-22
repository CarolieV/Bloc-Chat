(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    return Room;
  }
  var app = angular.module('bloc-chat', []);
app.controller('RoomCtrl', function($scope) {
    //array of objects retrieved by the all method
});

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
