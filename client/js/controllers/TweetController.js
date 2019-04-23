angular.module('twitter').controller('TwitterController', ['$scope', '$window', 'Twitter',
  function ($scope, $window, Twitter) {

    if (localStorage.getItem('LoggedIn') !== 'true') {
      $window.location.href = "../../login.html";
    }

    $scope.types = [
      { type: "Popular", search: "popular" },
      { type: "Recent", search: "recent" },
      { type: "Mixed", search: "mixed" }
    ];

    $scope.sortType = 'name'; // set the default sort type
    $scope.sortReverse = false;  // set the default sort order
    $scope.searchFish = '';     // set the default search/filter term

    $scope.twitter = [];
    $scope.clickTrend = function (topic) {

    };
    /* Initialize showing the Global Trend */
    var initCharts = Twitter.getGlobalTrends(1, localStorage.getItem('Token')).then(function (response) {
      response.data.shift();
      // console.log(response.data);
      // firstChartElements = response.data;
      // drawFirstChart(firstChartElements);
      // drawSecondChart(firstChartElements);
      // drawTable(firstChartElements);


      for (var i = 0; i < response.data.length; i++) {
        $scope.twitter.push(response.data[i]);
      }
      // $scope.twitter = response.data;
      // google.charts.setOnLoadCallback(updateCharts);
      // updateCharts(firstChartElements);
    }, function (error) {
      console.log('Unable to retrieve tweets:', error);
      $window.location.href = "../../login.html";
    });


    var initLocations = Twitter.getTrendLocations().then(function (response) {
      $scope.trendLocations = response.data;
      console.log($scope.trendLocations);
    });

    $scope.updateTrends = function () {
      console.log($scope.trendLocation);

      // $scope.twitter.length = 0;
      var j = $scope.twitter.length;
      for (var i = 0; i < j; i++) {
        $scope.twitter.shift();
      }
      Twitter.getGlobalTrends($scope.trendLocation).then(function (response) {
        response.data.shift();
        for (var i = 0; i < response.data.length; i++)
          $scope.twitter.push(response.data.shift());
      });
    };
    // console.log($scope.trendLocations);
    // DOES NOT WORK WITH "#"
    $scope.searchTweet = function () {
      if ($scope.searchWord.text == undefined) {
        return null;
      }
      if ($scope.searchWord.location == undefined) {
        Twitter.search($scope.searchWord.text, $scope.selectedType).then(function (response) {
          response.data.shift();
          $scope.search = response.data;
          console.log("Search for:" + $scope.searchWord.text + "Search Type: " + $scope.selectedType);
          console.log($scope.searchWord.location);
          console.log(response.data);
        }, function (error) {
          console.log('Unable to retrieve tweets:', error);
        });

      }
      else {
        var longitude;
        var latitude;
        Twitter.searchLocation($scope.searchWord.location).then(function (response) {
          console.log(response.data);
          longitude = response.data[0].centroid[1];
          latitude = response.data[0].centroid[0];

          Twitter.searchByLocation($scope.searchWord.text, longitude, latitude, $scope.selectedType).then(function (response) {
            response.data.shift();
            $scope.search = response.data;
            console.log("Search for:" + $scope.searchWord.text);
            console.log($scope.searchWord.location);
            console.log(response.data);
          }, function (error) {
            console.log('Unable to retrieve tweets:', error);
          });
        });


      }
    };

    $scope.logOut = function () {
      localStorage.setItem("LoggedIn", "false");
      localStorage.setItem("Token", "null");
      $window.location.href = "../../login.html";
    }



    // $ScopedCredential.searchLocation = function(){


    // }
  }
]);