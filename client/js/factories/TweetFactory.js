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
      }
    };
    return methods;
  });
  