/* register the modules the application depends upon here*/
angular.module('twitter', []);
angular.module('userAuth', []);

/* register the application and inject all the necessary dependencies */
<<<<<<< HEAD
var app = angular.module('dashboardApp', ['twitter', 'ngRoute', 'auth']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: '/components/Login.html',
            controller: 'authController'
        })
        .when('/index', {
            templateUrl: '/components/Dashboard.html'
        })
        .otherwise({
            redirectTo: '/index'
        });
}]);
=======
var app = angular.module('dashboardApp', ['twitter', 'userAuth']);
>>>>>>> master
