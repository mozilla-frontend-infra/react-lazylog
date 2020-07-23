const { Neutrino } = require('neutrino');

module.exports = Neutrino({ root: __dirname })
  .use('.neutrinorc')
  .call('eslintrc').rules['prettier/prettier'][1];
