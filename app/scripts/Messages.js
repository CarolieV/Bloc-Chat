function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var Messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
          Message.equalto(roomId);
      };
    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
