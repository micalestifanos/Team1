angular.module('twitter').controller('TwitterController', ['$scope', 'Twitter', 
  function($scope, Twitter) {
    /* Initialize showing the Global Trend */
    Twitter.getGlobalTrends().then(function(response) {
      console.log(response.data);
      firstChartElements = response.data;
      drawFirstChart(firstChartElements);
      drawSecondChart(firstChartElements);
      drawTable(firstChartElements);



      $scope.twitter = response.data;
    }, function(error) {
      console.log('Unable to retrieve tweets:', error);
    });
  }
]);