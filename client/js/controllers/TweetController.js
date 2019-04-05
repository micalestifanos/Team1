angular.module('twitter').controller('TwitterController', ['$scope', 'Twitter',
  function ($scope, Twitter) {
    /* Initialize showing the Global Trend */
    Twitter.getGlobalTrends(localStorage.getItem('Token')).then(function (response) {
      console.log(response.data);
      if (response.data == "Unauthorized") {
        $scope.message = 'Please login or sign up to view Twitter statistics.';
      } else {
        var firstChartElements = response.data;
        drawFirstChart(firstChartElements);
        drawSecondChart(firstChartElements);
        drawTable(firstChartElements);
        $scope.twitter = response.data;
      }

    }, function (error) {
      console.log('Unable to retrieve tweets:', error);
    });
  }
]);

function showMe(box) {
  var chboxs = document.getElementsByName(box);
  var vis = "none";
  for (var i = 0; i < chboxs.length; i++) {
    if (chboxs[i].checked) {
      vis = "block";
      break;
    }
  }
  document.getElementById(box).style.display = vis;
}
