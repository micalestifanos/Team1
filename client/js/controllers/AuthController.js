angular.module('userAuth').controller('AuthController', ['$scope', 'Users',
    function ($scope, Users) {
        $scope.newUser = {};
        $scope.loginUser = {};

        $scope.loginUser.email = localStorage.getItem('userEmail');

        $scope.addUser = function () {

            var createUser = {};

            if ($scope.newUser.email) createUser.email = $scope.newUser.email;
            if ($scope.newUser.password) createUser.password = $scope.newUser.password;
            if ($scope.newUser.password2) createUser.password2 = $scope.newUser.password2;

            Users.create(createUser);
        }

        $scope.signIn = function () {
            var authUser = {};

            if ($scope.loginUser.email) authUser.email = $scope.loginUser.email;
            if ($scope.loginUser.password) authUser.password = $scope.loginUser.password;

            Users.login(authUser).then((res) => {
                console.log(res.data);
                if (res.data.success == true) {
                    localStorage.setItem('Token', res.data.token);
                    location.reload();
                }
            });
        }

        $scope.rememberMe = function () {
            localStorage.setItem('userEmail', $scope.loginUser.email);
        }
    }
]);