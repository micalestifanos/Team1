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
          console.log('Global Trending Request');
          res.status(200).json(data);
        }
        else{
          console.log(err);
          res.status(400).send(err);
        }
    });

}
  