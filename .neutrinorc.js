const { merge } = require('neutrino-middleware-compile-loader');

module.exports = {
  use: [
    'neutrino-preset-react-components',
    (neutrino) => {
      if (neutrino.options.legacy) {
          neutrino.config.plugins.delete('clean');
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
        }
    }
  ]
};