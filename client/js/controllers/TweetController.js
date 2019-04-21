angular.module('twitter').controller('TwitterController', ['$scope', 'Twitter',
  function($scope, Twitter) {
    $scope.types = [
      {type : "Popular", search : "popular"},
      {type : "Recent", search : "recent"},
      {type : "Mixed", search : "mixed"}
  ];

  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchFish   = '';     // set the default search/filter term

  $scope.clickTrend = function(topic){
    
  };
    /* Initialize showing the Global Trend */
    var initCharts = Twitter.getGlobalTrends().then(function(response) {
      response.data.shift();
      console.log(response.data);
      // firstChartElements = response.data;
      // drawFirstChart(firstChartElements);
      // drawSecondChart(firstChartElements);
      // drawTable(firstChartElements);



      $scope.twitter = response.data;
      // google.charts.setOnLoadCallback(updateCharts);
      // updateCharts(firstChartElements);
    }, function(error) {
      console.log('Unable to retrieve tweets:', error);
    });
  // DOES NOT WORK WITH "#"
  $scope.searchTweet = function(){
    if($scope.searchWord.text == undefined){
      return null;
    }
    if($scope.searchWord.location == undefined){
      Twitter.search($scope.searchWord.text, $scope.selectedType).then(function(response){
        $scope.search = response.data; 
        console.log("Search for:" + $scope.searchWord.text + "Search Type: " +  $scope.selectedType);
        console.log($scope.searchWord.location);
        console.log(response.data);
      }, function(error) {
        console.log('Unable to retrieve tweets:', error);
      });

    }
    else{
      var longitude;
      var latitude;
      Twitter.searchLocation($scope.searchWord.location).then(function(response){
        console.log(response.data);
        longitude = response.data[0].centroid[1];
        latitude = response.data[0].centroid[0];

        Twitter.searchByLocation($scope.searchWord.text, longitude, latitude, $scope.selectedType).then(function(response){
          $scope.search = response.data;
          console.log("Search for:" + $scope.searchWord.text);
          console.log($scope.searchWord.location);
          console.log(response.data);
        }, function(error) {
          console.log('Unable to retrieve tweets:', error);
        });
      });
      

    }
  };



  // $ScopedCredential.searchLocation = function(){
    

  // }
}
]);
