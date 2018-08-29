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
      // neutrino.config.when(neutrino.options.command === 'build', () => {
      //   neutrino.use(fork, {
      //     configs: {
      //       'components-es5': {
      //         options: {
      //           output: 'es5',
      //         },
      //         use: [reactComponents, require.resolve('./react-components-es5')],
      //       },
      //     },
      //   });
      // });
    },
  ],
};
