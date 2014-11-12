function projectController($scope, $http, UserFactory) {
    $scope.displayProjects = function () {
        $http({method: 'GET',
            url: '/projects/'}).
            success(function (data) {
                $scope.projects = data.results;
//                console.log(data.results)
            }).
            error(function (data, status, headers, config) {
                console.log('error')
            });
    };
    $scope.displayProjects();

    $scope.updateFields = true;

    $scope.userData = [];

    $scope.displayUsers = function () {
        $http({method: 'GET',
            url: '/users/'}).
            success(function (data) {
                $scope.users = data.results;
//                console.log(data.results)
                $scope.users.push($scope.userData);
                console.log($scope.userData);
            }).
            error(function (data, status, headers, config) {
                console.log('error')
            });
    };
    $scope.displayUsers();

    $scope.deleteUser = function (userId) {
        $http({method: 'DELETE',
            url: '/users/' + userId
        }).
            success(function (data) {
                console.log('been deleted');
                $scope.displayUsers();
            });
    };


    $scope.editUser = function (userId) {
        console.log(this.user);
        $http.put('/users/' + userId, this.user).
            success(function (data) {
                console.log('user updated');
                $scope.displayUsers();
            }).error(function (data) {
                console.log($scope.user)
            });
    };

    $scope.info = function () {
        this.data = !this.data;
    };



}
