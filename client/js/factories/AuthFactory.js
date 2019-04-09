angular.module('userAuth', []).factory('Users', function ($http) {
    var methods = {
        create: function (user) {
            return $http.post('/api/users/register', user);
        },
        login: function (user) {
            return $http.post('/api/users/login', user);
        },
    };
    return methods;
});