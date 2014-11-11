var restApp = angular.module('restApp', ['ngRoute', 'ngResource']);

restApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/', {templateUrl: '/static/js/views/home.html', controller: projectController}).
//        when('/user-list', {templateUrl: 'partials/user-list.html', controller: UserListCtrl}).
//        when('/user-detail/:id', {templateUrl: 'partials/user-detail.html', controller: UserDetailCtrl}).
//        when('/user-creation', {templateUrl: 'partials/user-creation.html', controller: UserCreationCtrl}).
        otherwise({redirectTo: '/'});
}]);