const request = require('request');
const logger = require('morgan');

request({
  url: 'http://maps.googleapis.com/maps/api/geocode/json?address=220%20sinclair%20ave%20staten%20island',
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(response, undefined, 2));
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Location Lat: ${body.results[0].geometry.location.lat}`);
  console.log(`Location Lat: ${body.results[0].geometry.location.lng}`);
});
