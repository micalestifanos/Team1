angular.module('twitter').controller('TwitterController', ['$scope', 'Twitter',
  function($scope, Twitter) {
    /* Initialize showing the Global Trend */
    var initCharts = Twitter.getGlobalTrends().then(function(response) {
      console.log(response.data);
      firstChartElements = response.data;
      // drawFirstChart(firstChartElements);
      // drawSecondChart(firstChartElements);
      // drawTable(firstChartElements);



      $scope.twitter = response.data;
      // google.charts.setOnLoadCallback(updateCharts);
      updateCharts(firstChartElements);
    }, function(error) {
      console.log('Unable to retrieve tweets:', error);
    });
  // DOES NOT WORK WITH "#"
  $scope.searchTweet = function(){
      Twitter.search($scope.searchWord.text).then(function(response){
        $scope.search = response.data;
        console.log("Search for:" + $scope.searchWord.text);
        console.log($scope.searchWord.location);
        console.log(response.data);
      }, function(error) {
        console.log('Unable to retrieve tweets:', error);
      });
  };
  }
]);
