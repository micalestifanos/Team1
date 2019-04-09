angular.module('twitter', []).factory('Twitter', function($http) {
    var methods = {
      getGlobalTrends: function() {
        return $http.get('/api/twitter');
      },
      search: function(word){
        return $http.get('/api/twitter/search/' + word, word);
      }
    };
    return methods;
  });
  