function UserCreationCtrl($scope, UsersFactory, $location) {

    // callback for ng-click 'createNewUser':
    $scope.createNewUser = function () {
        UsersFactory.create($scope.user);
        $location.path('/user-list');
    }
}
