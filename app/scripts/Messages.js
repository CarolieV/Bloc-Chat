function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var Messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
          Message.equalto(roomId);
      };

      Message.send = function(newMessage) {
        myFirebase.push(newMessage));
        ngClick(MessageCtrl.js)
    };
    myFirebase.push({username:msgUser, text:msgText});
    textInput.value = "Carolie";
   });

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray','$cookies', Message]);
})();
