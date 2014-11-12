restApp.factory('UserFactory', function($resource) {
    return $resource('/users/' , {
        // Parameter defaults
    }, {
        // Actions
        update: {method: 'PUT'}
    });
});
