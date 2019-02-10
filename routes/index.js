var express = require('express');
var router = express.Router();
var Twitter = require('twitter');
var config = require('../config.js');

var T = new Twitter(config);

var params = {
    q: '#lit',
    exclude:"replies",
    exclude:"retweets",
    count: 100
}



/* GET home page. */
router.get('/tweets', function(req, res, next) {
  T.get('search/tweets', params, function(err, data, response) {
  if(!err){
   let tweets = data.statuses.map((el)=>{return(el.text)})
   res.send(data.statuses)

  } else {
    console.log(err);
  }
})
});

module.exports = router;
