console.log("The bot is starting");

//require Twit package, authenticate
const Twit = require('twit');
const config = require('./config');
const T = new Twit(config);

// Set search query parameters 
let params = {
    q: 'trump',
    count: 2
}

// Make request get(path: string, params, callback)
T.get('search/tweets', params, gotData);

//Handle the data returned by the request
function gotData(err, data, response) {
    let tweets = data.statuses;
    for (let i=0; i < tweets.length; i++) {
        console.log(tweets[i].text);
    }
}

