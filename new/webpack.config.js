/*
 * -------------------------
 * Production webpack config
 * -------------------------
 */
require('dotenv').config();

if (process.env.NODE_ENV !== 'production') {
  console.error('🔥  This webpack config is for production builds only.');
  process.exit(1)
}

var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'components'),
  entry: [
    './index.js',
    './index.css'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
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
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                autoprefixer: false, // handled by postcss-cssnext
                importLoaders: 1, // one more loader in the chain
                minimize: true
              }
            },
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
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
      filename: '[name].css'
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
