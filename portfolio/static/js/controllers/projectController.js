function projectController($scope, $http, UserFactory) {
    $scope.displayProjects = function () {
        $http({method: 'GET',
            url: '/projects/'}).
            success(function (data) {
                $scope.projects = data.results;
                console.log(data.results)
            }).
            error(function (data, status, headers, config) {
                console.log('error')
            });
    };
    $scope.displayProjects();


    $scope.displayUsers = function () {
        $http({method: 'GET',
            url: '/users/'}).
            success(function (data) {
                $scope.users = data.results;
                console.log(data.results)
            }).
            error(function (data, status, headers, config) {
                console.log('error')
            });
    };
    $scope.displayUsers();

    $scope.delete = (function (userId) {
        console.log(userId);
        $http({method: 'DELETE',
            url: '/users/' + userId
        }).
            success(function (data) {
                console.log('been deleted');
                $scope.displayUsers();
            });
    });

    $scope.updateUser = function () {
      UserFactory.update();
        console.log('updateUser')
    };

    $scope.info = function () {
        this.data = !this.data;
    };
//    var app = angular.module('ngdemo.controllers', []);
//
//    app.controller('UserListCtrl', ['$scope', 'UsersFactory', 'UserFactory', '$location',
//        function ($scope, UsersFactory, UserFactory, $location) {
//
//            // callback for ng-click 'editUser':
//            $scope.editUser = function (userId) {
//                $location.path('/user-detail/' + userId);
//            };
//
//            // callback for ng-click 'deleteUser':
//            $scope.deleteUser = function (userId) {
//                UserFactory.delete({ id: userId });
//                $scope.users = UsersFactory.query();
//            };
//
//            // callback for ng-click 'createUser':
//            $scope.createNewUser = function () {
//                $location.path('/user-creation');
//            };
//
//            $scope.users = UsersFactory.query();
//        }]);
//    app.controller('UserDetailCtrl', ['$scope', '$routeParams', 'UserFactory', '$location',
//        function ($scope, $routeParams, UserFactory, $location) {
//
//            // callback for ng-click 'updateUser':
//            $scope.updateUser = function () {
//                UserFactory.update($scope.user);
//                $location.path('/user-list');
//            };
//
//            // callback for ng-click 'cancel':
//            $scope.cancel = function () {
//                $location.path('/user-list');
//            };
//
//            $scope.user = UserFactory.show({id: $routeParams.id});
//        }]);
//
//    app.controller('UserCreationCtrl', ['$scope', 'UsersFactory', '$location',
//        function ($scope, UsersFactory, $location) {
//
//            // callback for ng-click 'createNewUser':
//            $scope.createNewUser = function () {
//                UsersFactory.create($scope.user);
//                $location.path('/user-list');
//            }
//        }]);
}
