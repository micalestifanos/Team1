angular.module('userAuth').controller('authController', ['$scope', '$window', 'Users',
    function ($scope, $window, Users) {
        $scope.newUser = {};
        $scope.loginUser = {};

        $scope.loginUser.email = localStorage.getItem('userEmail');

        $scope.addUser = function () {

            var createUser = {};

            if ($scope.newUser.name) createUser.name = $scope.newUser.name;
            if ($scope.newUser.email) createUser.email = $scope.newUser.email;
            if ($scope.newUser.password) createUser.password = $scope.newUser.password;

            Users.create(createUser).then($window.location.href = "../../login.html");
        }

        $scope.signIn = function () {
            var authUser = {};

            if ($scope.loginUser.name) authUser.name = $scope.loginUser.name;
            if ($scope.loginUser.password) authUser.password = $scope.loginUser.password;

            Users.login(authUser).then((res) => {
                console.log(res.data);
                if (res.data.success == true) {
                    localStorage.setItem('Token', res.data.token);
                    localStorage.setItem('LoggedIn', 'true');
                    $window.location.href = "../../index.html";
                }
            });
        }
    }
]);