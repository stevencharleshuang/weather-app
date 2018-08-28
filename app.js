const app     = require('express')();
const geocode = require('./geocode/geocode');
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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  errorMessage ? console.log(errorMessage) : console.log(JSON.stringify(results, undefined, 2));
});

console.log(argv);

app.use(logger('dev'));

