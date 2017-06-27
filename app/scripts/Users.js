(function() {
  function BlocChatCookies($cookies) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        <div ng-controller="UserModalCtrl as $ctrl" class="username">
            <script type="text/ng-template" id="Username.html">
                <div class="enter-username">
                    <h3 class="modal-title" id="modal-title">Enter Username</h3>
                </div>

                    <ul>
                        <li ng-repeat="item in $ctrl.items">
                            <a href="#" ng-click="$event.preventDefault(); $ctrl.selected.item = item">{{ item }}</a>
                        </li>
                    </ul>
                    Selected: <b>{{ $ctrl.selected.item }}</b>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" type="button" ng-click="$ctrl.ok()">OK</button>
                </div>
            </script>

          <div ng-show="$ctrl.selected">Selection from a modal: {{ $ctrl.selected }}</div>
            <div class="modal-parent">
            </div>
        </div>
            })
          }
        }    }
  }

  angular
    .module('blocChat')
    .run(['$cookies','$ubiModal', BlocChatCookies]);
})();
