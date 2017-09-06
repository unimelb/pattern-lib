/*
 * -------------------------
 * Production webpack config
 * -------------------------
 */
require('dotenv').config();

var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var isDev = process.env.NODE_ENV != 'production';

module.exports = {
  context: path.resolve(__dirname, 'components'),
  entry: [
    './index.js',
    './index.css'
  ],
  output: {
    path: path.resolve(__dirname, '.out/lib'),
    filename: '[name].js',
    publicPath: `${process.env.CDNURL}/${process.env.VERSION}/`
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg|woff2?|ttf|otf|eot|ico)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name]-[sha1:hash:5].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: {
            loader: 'style-loader',
            options: { sourceMap: isDev }
          },
          use: [
            {
              loader: 'css-loader',
              options: {
                autoprefixer: false, // handled by postcss-cssnext
                importLoaders: 1, // one more loader in the chain
                minimize: !isDev,
                sourceMap: isDev
              }
            },
            {
              loader: 'postcss-loader',
              options: { sourceMap: isDev }
            }
          ]
        })
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
      'CDNURL'
    ]),
    new ExtractTextPlugin({
      allChunks: true,
      filename: '[name].css',
      disable: isDev
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
