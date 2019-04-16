angular.module('twitter').controller('TwitterController', ['$scope', '$window', 'Twitter',
  function ($scope, $window, Twitter) {
    /* Initialize showing the Global Trend */
    var initCharts = Twitter.getGlobalTrends(localStorage.getItem('Token')).then(function (response) {
      console.log(response.data);
      var firstChartElements = response.data;
      // drawFirstChart(firstChartElements);
      // drawSecondChart(firstChartElements);
      // drawTable(firstChartElements);

      $scope.twitter = response.data;
      // google.charts.setOnLoadCallback(updateCharts);
      updateCharts(firstChartElements);
    }, function (error) {
      console.log('Unable to retrieve tweets:', error);
      $window.location.href = "../../login.html";
    });
    // DOES NOT WORK WITH "#"
    $scope.searchTweet = function () {
      Twitter.search($scope.searchWord.text).then(function (response) {
        $scope.search = response.data;
        console.log(response.data);
      }, function (error) {
        console.log('Unable to retrieve tweets:', error);
      });
    };
  }
]);
