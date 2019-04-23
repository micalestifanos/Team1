var Twitter = require('twitter'),
  config = require('../config/config');
var TwitterController = new Twitter(config.twitter_keys);
//Req will be used to send Param in the future
exports.getGlobalTrends = function (req, res) {

  var params = {
    id: req.params.woeid,
    count: 10,
    result_type: 'recent',
    lang: 'en'
  }

  TwitterController.get('trends/place.json', params, function (err, data, result) {
    if (!err) {
      var tweets = [{ topic: String, volume: Number }];
      console.log('Global Trending Request');
      console.log(data);
      for (let i = 0; i < data[0].trends.length; i++) {
        tweet = { topic: data[0].trends[i].name, volume: data[0].trends[i].tweet_volume };
        if (tweet.volume != null)
          tweets.push(tweet);
      }
      res.status(200).json(tweets);
    }
    else {
      console.log(err);
      res.status(400).send(err);
    }
  });

};

//Defaults to return most popular, can be changed to mixed and recent
//Defaults to 100 tweets
exports.searchTweet = function (req, res) {
  var params = {
    q: req.params.searchWord,
    result_type: req.params.type.toLowerCase(),
    count: '10'
  }
  console.log(req.params.searchWord);
  var tweets = [{ text: String, username: String, url: String, followers: Number, retweet: Number, image: String, id: Number, favorites: Number }];
  TwitterController.get('search/tweets.json', params, function (err, data, result) {
    if (!err) {
      // console.log(data.statuses[0].text);
      var tweet;
      for (var i = 0; i < data.statuses.length; i++) {
        tweet = {
          text: data.statuses[i].text, username: data.statuses[i].user.name, screenname: data.statuses[i].user.screen_name,
          url: data.statuses[i].user.url, followers: data.statuses[i].user.followers_count,
          image: data.statuses[i].user.profile_image_url_https,
          retweet: data.statuses[i].retweet_count, id: data.statuses[i].id_str, favorites: data.statuses[i].favorite_count
        };
        tweets.push(tweet);
        if (tweet.image == null) {
          tweet.image = "logo2.png"
        }

      }
      // console.log(data);
      res.status(200).json(tweets);
    }
    else {
      console.log("ERRRROROROROROR");
      console.log(err);
      res.status(400).send(err);
    }
  });


};

exports.searchTweetByLocation = function (req, res) {
  var params = {
    q: req.params.searchWord,
    result_type: req.params.type.toLowerCase(),
    count: '10',
    geocode: { longitude: req.params.longitude, latitude: req.params.latitude, radius: '50mi' }
  }

  var tweets = [{ text: String, username: String, url: String, followers: Number, retweet: Number, image: String, id: Number, favorites: Number }];
  // var location;

  // TwitterController.get('/geo/search.json', req.params.location, function(err, data, result){
  //   if(!err){
  //     geocode.latitude = data.results.places[0];
  //   }
  //   else{
  //     console.log("location error");
  //     res.status(400).send(err);
  //   }
  // });
  TwitterController.get('search/tweets.json', params, function (err, data, result) {
    if (!err) {
      // console.log(data.statuses[0].text);
      var tweet;
      for (var i = 0; i < data.statuses.length; i++) {
        tweet = {
          text: data.statuses[i].text, username: data.statuses[i].user.name, screenname: data.statuses[i].user.screen_name,
          url: data.statuses[i].user.url, followers: data.statuses[i].user.followers_count,
          image: data.statuses[i].user.profile_image_url_https,
          retweet: data.statuses[i].retweet_count, id: data.statuses[i].id_str, favorites: data.statuses[i].favorite_count
        };
        if (tweet.image == null) {
          tweet.image = "logo2.png"
        }
        tweets.push(tweet);

      }
      // console.log(data);
      res.status(200).json(tweets);
    }
    else {
      console.log("ERRRROROROROROR");
      console.log(err);
      res.status(400).send(err);
    }
  });




};

exports.getLocation = function (req, res) {
  var params = {
    query: req.params.location
  }
  console.log(params.location)

  TwitterController.get('geo/search.json', params, function (err, data, response) {
    if (!err) {
      console.log(data.result.places);
      res.status(200).send(data.result.places)
      return data.result.places;

    }
    else {
      console.log("Location error");
      res.status(400).send(err);
    }
  });
};

exports.trendLocations = function (req, res) {
  // TwitterController.get("trends/available.json", function(err, data, response){
  //   if(!err){
  //     console.log(data.result);
  //     res.status(200).send(data.result);

  //   }
  //   else{
  //     console.log("Trend Location Error!");
  //     res.status(400).send(err);
  //   }
  // });
  console.log("reaching here");
  var woeid = require('./woeid.json');
  res.status(200).json(woeid);
};

<<<<<<< HEAD

=======
>>>>>>> geraldina_zhang
