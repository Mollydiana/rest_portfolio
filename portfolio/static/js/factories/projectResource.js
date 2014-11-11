restApp.factory('UserFactory', function($resource) {
    return $resource('/users/:id', {
        // Parameter defaults
    }, {
        // Actions
        update: {method: 'PUT'}
    });
});
//
////var restApp = angular.module('ngdemo.services', ['ngResource']);
//
//    restApp.factory('UsersFactory', function ($resource) {
//        return $resource('/users', {}, {
//            query: { method: 'GET', isArray: true },
//            create: { method: 'POST' }
//        })
//    });
//
//    restApp.factory('UserFactory', function ($resource) {
//        return $resource('users/:id', {}, {
//            show: { method: 'GET' },
//            update: { method: 'PUT', params: {id: '@id'} },
//            delete: { method: 'DELETE', params: {id: '@id'} }
//        })
//    });
//});