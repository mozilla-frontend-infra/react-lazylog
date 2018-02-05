const { join } = require('path');

module.exports = (neutrino) => {
  neutrino.use('@neutrinojs/airbnb', {
    eslint: {
      fix: true,
      emitWarning:
        process.env.NODE_ENV === 'development' ||
        neutrino.options.command === 'styleguide:start',
      baseConfig: {
        extends: ['eslint-config-prettier']
      },
      plugins: ['eslint-plugin-prettier'],
      envs: ['worker', 'serviceworker'],
      rules: {
        'arrow-body-style': 'off',
        'babel/new-cap': 'off',
        'class-methods-use-this': 'off',
        'consistent-return': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-mixed-operators': 'off',
        'no-plusplus': 'off',
        'no-restricted-globals': 'off',
        'no-restricted-syntax': 'off',
        'no-return-assign': 'off',
        'no-shadow': 'off',
        'no-unused-expressions': 'off',
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
            bracketSpacing: true,
            jsxBracketSameLine: true,
            trailingComma: 'es5',
          },
          { usePrettierrc: false }
        ],
        'padding-line-between-statements': [
          'error',
          { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
          { blankLine: 'never', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
          { blankLine: 'always', prev: 'multiline-block-like', next: '*' },
          { blankLine: 'always', prev: '*', next: ['if', 'do', 'for', 'switch', 'try', 'while'] },
          { blankLine: 'always', prev: '*', next: 'return' }
        ],
        'jsx-a11y/anchor-is-valid': 'off',
        'jsx-a11y/anchor-has-content': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/label-has-for': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'no-console': process.env.NODE_ENV === 'development' ? 'off' : 'error',
        'no-continue': 'off',
        'react/no-array-index-key': 'off',
        // handled by prettier rules
        'react/default-props-match-prop-types': 'off',
        'react/forbid-prop-types': 'off',
        'react/jsx-closing-bracket-location': 'off',
        'react/jsx-handler-names': ['error', {
          eventHandlerPrefix: 'handle',
          eventHandlerPropPrefix: 'on',
        }],
        'react/jsx-indent': 'off',
        // styling choice which makes using redux in es6 style more difficult.
        'react/no-multi-comp': 'off',
        'react/prefer-stateless-function': 'off',
        // we have not annotated anything in prop-types
        'react/prop-types': 'off',
        'react/sort-comp': 'off',
      }
    }
  });
  neutrino.use('neutrino-middleware-styleguidist', {
    components: join('**/src/components/**/*.{js,jsx}'),
    require: ['babel-polyfill'],
    showUsage: true,
    skipComponentsWithoutExample: true,
  });
  neutrino.use('@neutrinojs/react-components');

  if (neutrino.options.command === 'build') {
    neutrino.use('@neutrinojs/fork', {
      configs: {
        'components-cra': {
          use: [
            ['@neutrinojs/react-components', {
              clean: false,
            }],
            '.neutrinorc.cra.js'
          ]
        }
      }
    });
  }
};
