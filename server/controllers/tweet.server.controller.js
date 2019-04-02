var Twitter = require('twitter'),
    config = require('../config/config');

var TwitterController = new Twitter(config.twitter_keys);

//Req will be used to send Param in the future
exports.getGlobalTrends = function(req, res){
  var params = {
      id: '1',
      count: 10,
      result_type: 'recent',
      lang: 'en'
    }
    var tweets = [{topic: String, volume: Number}];
    TwitterController.get('trends/place.json', params, function(err, data, result){
        if(!err){
          console.log('Global Trending Request');
          for (let i = 0; i < 50; i++){
            var tweet = {topic: data[0].trends[i].name, volume: data[0].trends[i].tweet_volume};
            if(tweet.volume != null)
            // console.log(tweet);
            tweets.push(tweet);
          }
          res.status(200).json(tweets);

        }
        else{
          console.log(err);
          res.status(400).send(err);
        }
    });
    
}
//Defaults to return most popular, can be changed to mixed and recent
//Defaults to 100 tweets
exports.searchTweet = function(req, res){
  var params = {
    q: req,
    result_type: 'popular',
    count: '100'
  }

  var tweets = [{text: String, username: String}];
  

}
  