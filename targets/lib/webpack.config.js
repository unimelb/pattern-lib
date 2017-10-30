require('dotenv').config();

const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const sharedConfig = require('../webpack.config.shared.js');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const isDev = process.env.NODE_ENV !== 'production';

module.exports = merge(sharedConfig, {
  entry: {
    ui: [
      './targets/lib/index.js',
      './targets/lib/index.css',
    ],
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
    },
  },
  devServer: {
    publicPath: sharedConfig.output.publicPath,
    hot: true, // enable hot module replacement
    overlay: true, // show overlay in browser on compiler error or warning
    clientLogLevel: 'warning', // reduce browser console output
    stats: 'minimal', // reduce terminal output

    // Work around security restriction
    // https://github.com/webpack/webpack-dev-server/issues/897
    disableHostCheck: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  plugins: isDev ? [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './targets/lib/index.html',
      inject: true,
    }),
  ] : [],
});
