require('dotenv').config();

const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const isDev = process.env.NODE_ENV != 'production';

module.exports = merge(baseConfig, {
  context: path.resolve(__dirname, 'components'),
  devtool: isDev && 'eval-cheap-module-source-map',
  entry: [
    './index.js',
    './index.css',
    './icons/sprite.js'
  ],
  output: {
    path: path.resolve(__dirname, '.out/lib'),
    filename: '[name].js',
    publicPath: `${process.env.CDNURL}/${process.env.VERSION}/`
  },
  module: {
    rules: [
      {
        // JavaScript (ES6)
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  }
});
