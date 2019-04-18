angular.module('twitter', []).factory('Twitter', function($http) {
    var methods = {
      getGlobalTrends: function() {
        return $http.get('/api/twitter');
      },
      search: function(word, type){
        return $http.get('/api/twitter/search/' + word + '/' + type, word, type);
      },
      searchByLocation: function(word, location){
        return $http.get('/api/twitter/search/' + word + '/' + location, word, location);
      },
      searchLocation: function(word){
        return $http.get('/api/twitter/location/' + word, word);
      }
    };
    return methods;
  });
  