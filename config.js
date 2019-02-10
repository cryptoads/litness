require('dotenv').config()

module.exports = {
  consumer_key: process.env.consumer,
  consumer_secret: process.env.consumerSecret,
  access_token_key: process.env.access,
  access_token_secret: process.env.accessSecret
}