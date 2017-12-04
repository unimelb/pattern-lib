const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('../webpack.config.base.js');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const isDev = process.env.NODE_ENV !== 'production';

module.exports = merge(baseConfig, {
  output: {
    filename: '[name].js',
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
  plugins: isDev ? [] : [
    new webpack.optimize.UglifyJsPlugin(),
  ],
});
