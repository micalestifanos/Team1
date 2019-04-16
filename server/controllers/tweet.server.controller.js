var Twitter = require('twitter'),
  config = require('../config/config');
var TwitterController = new Twitter(config.twitter_keys);
//Req will be used to send Param in the future
exports.getGlobalTrends = function (req, res) {

  var params = {
    id: '1',
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
    result_type: 'popular',
    count: '10'
  }
  console.log(req.params.searchWord);
  var tweets = [{ text: String, username: String, url: String, followers: Number, retweet: Number }];
  TwitterController.get('search/tweets.json', params, function (err, data, result) {
    if (!err) {
      // console.log(data.statuses[0].text);
      var tweet;
      for (var i = 0; i < data.statuses.length; i++) {
        tweet = {
          text: data.statuses[i].text, username: data.statuses[i].user.name,
          url: data.statuses[i].user.url, followers: data.statuses[i].user.followers_count,
          retweet: data.statuses[i].retweet_count
        };
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


}
