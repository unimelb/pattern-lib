require('dotenv').config();

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

const sharedConfig = require('../webpack.config.shared.js');
const pkg = require('../../package.json');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const isDev = process.env.NODE_ENV !== 'production';

const emitHtml = isDev || process.env.LIB_EMIT_HTML === 'true';
const versionToLoad = process.env.LIB_LOAD_VERSION === 'auto' ? pkg.version : process.env.LIB_LOAD_VERSION;
const publicPath = !isDev && versionToLoad ? `${process.env.CDN_URL}/v${versionToLoad}/` : '';

module.exports = merge(sharedConfig, {
  output: {
    path: path.resolve(__dirname, `../../.out/lib/v${pkg.version}/`),
    publicPath,
  },
  resolve: {
    alias: {
      vue: `vue/dist/vue${isDev ? '' : '.min'}.js`,
    },
  },
  module: {
    rules: [
      {
        // Sprite icons (extract mode -- let Ike deal with injecting the extracted sprite)
        test: /\.svg$/,
        issuer: /sprite\/index\.js$/,
        loader: 'svg-sprite-loader', // https://github.com/kisenka/svg-sprite-loader
        options: {
          extract: true,
          symbolId: 'icon-[name]',
          spriteModule: 'icons/sprite-config',
        },
      },
    ],
  },
  plugins: [
    new SpriteLoaderPlugin({
      plainSprite: true,
      spriteAttrs: {
        id: 'uom-sprite-gen2',
      },
    }),
  ]
    .concat(isDev ? [
      new webpack.HotModuleReplacementPlugin(),
    ] : [])
    .concat(emitHtml ? [
      new HtmlWebpackPlugin({
        template: './targets/lib/index.html',
        inject: true,
      }),
    ] : []),
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
