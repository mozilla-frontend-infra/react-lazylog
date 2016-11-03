const preset = require('neutrino-preset-react');

preset.output.publicPath = './';
preset.module.preLoaders = [];

module.exports = preset;
