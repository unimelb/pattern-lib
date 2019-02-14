require('dotenv').config();

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

const baseConfig = require('../../webpack.config.base.js');
const pkg = require('../../package.json');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const isDev = process.env.NODE_ENV !== 'production';

const emitHtml = isDev || process.env.LIB_EMIT_HTML === 'true';

const versionToLoad = process.env.LIB_LOAD_VERSION === 'auto'
  ? pkg.version
  : process.env.LIB_LOAD_VERSION;

const publicPath = !isDev && versionToLoad ? `${process.env.CDN_URL}/v${versionToLoad}/` : '';
const mergedConfiguration = merge(baseConfig, {
  entry: {
    ui: ['./targets/lib/index.js', './targets/lib/index.css'],
  },
  output: {
    path: path.resolve(__dirname, `../../.out/lib/v${pkg.version}/`),
    publicPath,
    filename: '[name].js',
  },
  resolve: {
    alias: {
      vue: `vue/dist/vue${isDev ? '' : '.min'}.js`,
    },
  },
  module: {
    rules: [
      {
        // JavaScript (ES6)
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        // Sprite icons (extract mode -- let Ike deal with injecting the extracted sprite)
        // https://github.com/kisenka/svg-sprite-loader
        test: /\.svg$/,
        issuer: /sprite\/index\.js$/,
        loader: 'svg-sprite-loader',
        options: {
          extract: true,
          symbolId: 'icon-[name]',
        },
      },
    ],
  },
  plugins: [new SpriteLoaderPlugin({ plainSprite: true })]
    .concat(isDev ? [] : [new webpack.optimize.UglifyJsPlugin()])
    .concat(isDev ? [new webpack.HotModuleReplacementPlugin()] : [])
    .concat(
      emitHtml
        ? [
          new HtmlWebpackPlugin({
            template: './targets/lib/index.html',
            inject: true,
          }),
        ]
        : []
    ),
  devServer: {
    publicPath,
    hot: true, // enable hot module replacement
    overlay: true, // show overlay in browser on compiler error or warning
    clientLogLevel: 'warning', // reduce browser console output
    stats: 'minimal', // reduce terminal output

    // Work around security restriction
    // https://github.com/webpack/webpack-dev-server/issues/897
    disableHostCheck: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
});
module.exports = mergedConfiguration;
