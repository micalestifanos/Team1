/* Dependencies */
var Twitter = require('../controllers/tweet.server.controller.js'), 
    express = require('express'), 
    router = express.Router();

/* 
  These method calls are responsible for routing requests to the correct request handler.
  Take note that it is possible for different controller functions to handle requests to the same route.
 */
router.route('/').get(Twitter.getGlobalTrends)



/*
  The ':' specifies a URL parameter. 
 */
// router.route('/:listingId')
//   .get(listings.read)
//   .put(listings.update)
//   .delete(listings.delete);

// router.param('twitter', listings.listingByID);

module.exports = router;