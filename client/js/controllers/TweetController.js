angular.module('twitter').controller('TwitterController', ['$scope', '$window', 'Twitter',
  function ($scope, $window, Twitter) {
    /* Initialize showing the Global Trend */
    Twitter.getGlobalTrends(localStorage.getItem('Token')).then(function (response) {
      console.log(response.data);

      var firstChartElements = response.data;
      drawFirstChart(firstChartElements);
      drawSecondChart(firstChartElements);
      drawTable(firstChartElements);
      $scope.twitter = response.data;

    }, function (error) {
      console.log('Unable to retrieve tweets:', error);
      $window.location.href = "../../login.html";

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
