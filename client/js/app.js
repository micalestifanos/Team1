/* register the modules the application depends upon here*/
angular.module('twitter', []);
angular.module('userAuth', []);

/* register the application and inject all the necessary dependencies */
var app = angular.module('dashboardApp', ['twitter', 'userAuth']);