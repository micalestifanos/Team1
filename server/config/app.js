var config = require('./config'),
  mongoose = require('mongoose'),
  express = require('./express'),
  Twitter = require('twitter');

module.exports.start = function () {
  var app = express.init();
  app.listen(config.port, function () {
    console.log('App listening on port', config.port);
  });
};