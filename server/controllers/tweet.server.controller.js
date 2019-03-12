var Twitter = require('twitter'),
    config = require('../config/config');

//Req will be used to send Param in the future
exports.getGlobalTrends = function(req, res){
  var TwitterController = new Twitter(config.twitter_keys);
  var params = {
      id: '1',
      count: 10,
      result_type: 'recent',
      lang: 'en'
    }

    TwitterController.get('trends/place.json', params, function(err, data, result){
        if(!err){
          var tweets = [{topic: String, volume: Number}];
          console.log('Global Trending Request');
          for (let i = 0; i < 50; i++){
            tweet = {topic: data[0].trends[i].name, volume: data[0].trends[i].tweet_volume};
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
  