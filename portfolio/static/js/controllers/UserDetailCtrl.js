function UserDetailCtrl($scope, $routeParams, UserFactory, $location) {

    // callback for ng-click 'updateUser':
    $scope.updateUser = function () {
        UserFactory.update($scope.user);
        $location.path('/user-list');
    };

    // callback for ng-click 'cancel':
    $scope.cancel = function () {
        $location.path('/user-list');
    };

    $scope.user = UserFactory.show({id: $routeParams.id});
}
