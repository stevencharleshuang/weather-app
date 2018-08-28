const app     = require('express')();
const request = require('request');
const logger  = require('morgan');
const yargs   = require('yargs');

const argv = yargs
  .options({
    a: {
      demand:   true,
      alias:    'address',
      describe: 'Address to fetch weather for',
      string:   true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

let encodedAddress = encodeURIComponent(argv.address);

console.log(argv);

app.use(logger('dev'));

request({
  url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(response, undefined, 2));
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Location Lat: ${body.results[0].geometry.location.lat}`);
  console.log(`Location Lat: ${body.results[0].geometry.location.lng}`);
});
