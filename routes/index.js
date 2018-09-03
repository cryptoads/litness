var express = require('express');
var router = express.Router();
var Twitter = require('twitter');
var config = require('../config.js');

var T = new Twitter(config);

var params = {
    q: '#lit',
    exclude:"replies",
    exclude:"retweets",
    geocode: "37.749,-84.3880,150mi",
    count: 100
}



/* GET home page. */
router.get('/', function(req, res, next) {
  T.get('search/tweets', params, function(err, data, response) {
  if(!err){
   let tweets = data.statuses.map((el)=>{return(el.text)})
   res.json(tweets);
  } else {
    console.log(err);
  }
})
});

module.exports = router;
