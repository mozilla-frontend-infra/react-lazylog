const prod = require('mozilla-neo/config/webpack.prod.js');

prod.output.publicPath = './';

module.exports = prod;
