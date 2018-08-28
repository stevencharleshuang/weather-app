require('dotenv').config();
const app     = require('express')();
const request = require('request');
const geocode = require('./geocode/geocode');
const logger  = require('morgan');
const yargs   = require('yargs');

// const argv = yargs
//   .options({
//     a: {
//       demand:   true,
//       alias:    'address',
//       describe: 'Address to fetch weather for',
//       string:   true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   errorMessage ? console.log(errorMessage) : console.log(JSON.stringify(results, undefined, 2));
// });

// console.log(argv);

app.use(logger('dev'));

request({
  url: `https://api.darksky.net/forecast/${process.env.SECRET_KEY}/42.3601,-71.0589`,
  json: true,
}, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(body.currently.temperature);
  } else {
    console.log('Unable to fetch weather');
  }
});
