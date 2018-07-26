console.log('this is loaded');

exports.twitter = {
  consumer_key:zQnbFtNC6qCrgofiVrHX08PJE ,
  consumer_secret:	RLXFcT4isMzlaYWVfUmkKjc0uxfd6SrI7lkQs86RrQIJFdk7Zo,
  access_token_key:	1019656577236815872-ACsgALe7Qb1uhFHWsPODwM4BVxqFGT, 
  access_token_secret: 	emSenW3W1KeJaJXEgkZBb2vjQ8Iib9lLrMUUSiPaBKT4W,
};

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
