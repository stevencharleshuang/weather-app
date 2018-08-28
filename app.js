const request = require('request');

request({
  url: 'http://maps.googleapis.com/maps/api/geocode/json?address=220%20sinclair%20ave%20staten%20island',
  json: true
}, (error, response, body) => {
  console.log(body);
});
