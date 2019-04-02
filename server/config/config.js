//This file holds any configuration variables we may need 
//'config.js' is typically ignored by git to protect sensitive information, such as your database's username and password

module.exports = {
  db: {
    uri: "mongodb://master:password0@ds123196.mlab.com:23196/twitterstats", //place the URI of your mongo database here.
  },
  port: process.env.PORT || 8080,
  twitter_keys: {
    consumer_key: 'v58J1CrMthlOjea64bQyDmxQ6',
    consumer_secret: '0U44t2HuEfcfSjUTpa6IcWB7P1ZicFLZhLS3w8zoIOLpXzvKrJ',
    access_token_key: '1105169141240135680-JJJ7y6RarmY14rTnhahma9q5xqOeHu',
    access_token_secret: 'MtDCmtdwAnxeYCkoeDp075UzdOqxU2s2cixxUlNGZnwzK'
  },
  secretOrKey: "Th1s^1s^m1^s3cr3t"
};