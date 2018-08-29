module.exports = {
  use: [
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
      // Because we use prettier, we don't care about linting
      neutrino.config.module.rules.delete('lint');
    },
  ],
};
