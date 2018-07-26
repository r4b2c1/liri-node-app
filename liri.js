var inquirer = require("inquirer");

require("dotenv").config();
require("keys.js").config();

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

