var restApp = angular.module('restApp', ['ngRoute', 'ngResource']);

restApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/', {templateUrl: '/static/js/views/home.html', controller: projectController}).
        otherwise({redirectTo: '/'});
}]);