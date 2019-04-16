/* Dependencies */
var Twitter = require('../controllers/tweet.server.controller.js'),
  express = require('express'),
  router = express.Router(),
  passport = require('passport');

/* 
  These method calls are responsible for routing requests to the correct request handler.
  Take note that it is possible for different controller functions to handle requests to the same route.
 */
router.route('/').get(Twitter.getGlobalTrends);
router.route('/search/:searchWord').get(Twitter.searchTweet);

// @route  /api/twitter/
// @desc   Gets twitter information
// @access Private
router.route('/').get(passport.authenticate('jwt', { session: false }), Twitter.getGlobalTrends)

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