const path = require('path');
const merge = require('webpack-merge');
const pkg = require('../package.json');
const baseConfig = require('../webpack.config.base.js');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const isDev = process.env.NODE_ENV !== 'production';

module.exports = merge(baseConfig, {
  devtool: isDev && 'source-map',
  output: {
    path: path.resolve(__dirname, `../.out/lib/v${pkg.version}/`),
    filename: '[name].js',
    publicPath: isDev ? '' : `${process.env.CDN_URL}/v${pkg.version}/`,
  },
  module: {
    rules: [
      {
        // JavaScript (ES6)
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
});
