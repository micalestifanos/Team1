<<<<<<< HEAD
angular.module('twitter', []).factory('Twitter', function ($http) {
  var methods = {
    getGlobalTrends: function (token) {
      if (token) {
        $http.defaults.headers.common.Authorization = token;
      } else {
        delete $http.defaults.headers.common.Authorization;
=======
angular.module('twitter', []).factory('Twitter', function($http) {
    var methods = {
      getGlobalTrends: function() {
        return $http.get('/api/twitter');
        // $http.get('/apit/twitter')
        // .then(function(res){
        //   return res;
        // }, function(err){
        //   console.log(err);
        // });
        // .success(function(data){
        //   return data;
        // })
        // .error(function(res){
        //   console.log("Error Requesting Data" + res);
        // });
>>>>>>> luccas_sprint2
      }
      return $http.get('/api/twitter');
    },
    search: function (word) {
      return $http.get('/api/twitter/search/' + word, word);
    }
  }
});
