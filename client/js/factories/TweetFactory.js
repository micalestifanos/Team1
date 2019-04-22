angular.module('twitter', []).factory('Twitter', function($http) {
    var methods = {
      getGlobalTrends: function(woeid) {
        return $http.get('/api/twitter/trends/' + woeid, woeid);
      },
      search: function(word, type){
        return $http.get('/api/twitter/search/' + word + '/' + type, word, type);
      },
      searchByLocation: function(word, longitude, latitude, type){
        return $http.get('/api/twitter/search/' + word + '/' + longitude + '/' + latitude + '/' + type, word, longitude,latitude, type);
      },
      searchLocation: function(word){
        return $http.get('/api/twitter/location/' + word, word);
      },
      getTrendLocations: function(){
        return $http.get('/api/twitter/trends/');
      }
    };
    return methods;
  });
  