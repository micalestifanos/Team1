angular.module('twitter', []).factory('Twitter', function ($http) {
  var methods = {
    getGlobalTrends: function (token) {
      if (token) {
        $http.defaults.headers.common.Authorization = token;
      } else {
        delete $http.defaults.headers.common.Authorization;
      }
      return $http.get('/api/twitter');
    },
    search: function (word) {
      return $http.get('/api/twitter/search/' + word, word);
    }
  }
});
