/* Dependencies */
var Twitter = require('../controllers/tweet.server.controller.js'),
  express = require('express'),
  router = express.Router(),
  passport = require('passport');

/* 
  These method calls are responsible for routing requests to the correct request handler.
  Take note that it is possible for different controller functions to handle requests to the same route.
 */
router.route('/trends/:woeid').get(Twitter.getGlobalTrends);
router.route('/search/:searchWord/:type').get(Twitter.searchTweet);
router.route('/search/:searchWord/:latitude/:longitude/:type').get(Twitter.searchTweetByLocation);
router.route('/location/:location').get(Twitter.getLocation);
router.route('/trends').get(Twitter.trendLocations);



// router.param('searchWord', Twitter.searchWord);



/*
  The ':' specifies a URL parameter. 
 */
// router.route('/:listingId')
//   .get(listings.read)
//   .put(listings.update)
//   .delete(listings.delete);

// router.param('twitter', listings.listingByID);

module.exports = router;