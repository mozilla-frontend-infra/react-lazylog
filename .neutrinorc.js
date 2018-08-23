const defaultRewrite = {
  target: `http://localhost:3002`,
  pathRewrite: path => path.replace(/\/$/, ''),
};

let use;
if (process.env.NEUTRINO_ENV === 'docs') {
  use = [
    'neutrino-preset-mozilla-frontend-infra/styleguide',
    [
      'neutrino-preset-mozilla-frontend-infra/react-components',
      {
        style: {
          extract: false,
        },
      },
    ],
    neutrino => {
      if (neutrino.options.command === 'styleguide:start') {
        neutrino.config.module.rules.delete('lint');
      }
    },
  ];
} else {
  use = [
    [
      '@neutrinojs/react-components',
      {
        devServer: {
          hot: true,
          proxy: {
            '/api': defaultRewrite,
          },
        },
      },
    ],
    '@neutrinojs/jest',
  ];
}

module.exports = {
  use,
};
