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


router.get('/tweet/:value', function(req, res, next) {
 let searchDetails ={
    q: req.params.value,
    exclude:"replies",
    exclude:"retweets",
    count: 100
}
  T.get('search/tweets', searchDetails, function(err, data, response) {
  if(!err){
   let tweets = data.statuses.map((el)=>{return(el.text)})
   res.send(data.statuses)

  } else {
    console.log(err);
  }
})
});

/* GET home page. */
router.get('/tweets/', function(req, res, next) {

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
