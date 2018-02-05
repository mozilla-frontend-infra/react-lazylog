const { merge } = require('@neutrinojs/compile-loader');

module.exports = (neutrino) => {
  neutrino.config.output.filename('[name].es5.js');
  neutrino.config.module
    .rule('compile')
    .use('babel')
    .tap(options => merge(options, {
      presets: [
        ['babel-preset-env', {
          targets: {
            ie: 9
          },
          useBuiltIns: false,
          modules: false
        }]
      ]
    }));

  neutrino.on('build', () => {
    setTimeout(() => process.exit(), 3000);
  });
};