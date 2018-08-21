const defaultRewrite = {
  target: `http://localhost:3002`,
  pathRewrite: path => path.replace(/\/$/, ''),
};

module.exports = {
  use: [
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
  ],
};
