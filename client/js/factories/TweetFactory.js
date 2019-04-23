angular.module('twitter', []).factory('Twitter', function ($http) {
  var methods = {
    getGlobalTrends: function (woeid, token) {
      if (token) {
        $http.defaults.headers.common.Authorization = token;
      }
      return $http.get('/api/twitter/trends/' + woeid, woeid);
    },
    search: function (word, type) {
      return $http.get('/api/twitter/search/' + word + '/' + type, word, type);
    },
    searchByLocation: function (word, longitude, latitude, type) {
      return $http.get('/api/twitter/search/' + word + '/' + longitude + '/' + latitude + '/' + type, word, longitude, latitude, type);
    },
    searchLocation: function (word) {
      return $http.get('/api/twitter/location/' + word, word);
    },
    getTrendLocations: function () {
      return $http.get('/api/twitter/trends/');
    }
  };
  return methods;
});
