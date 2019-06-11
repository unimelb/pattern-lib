require('dotenv').config();

const path = require('path');
const merge = require('webpack-merge');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const sharedConfig = require('../webpack.config.shared.js');
const pkg = require('../../package.json');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const isDev = process.env.NODE_ENV !== 'production';

const versionToLoad = process.env.LIB_LOAD_VERSION === 'auto' ? pkg.version : process.env.LIB_LOAD_VERSION;
const publicPath = !isDev && versionToLoad ? `${process.env.CDN_URL}/v${versionToLoad}/` : '';

module.exports = merge(sharedConfig, {
  entry: {
    'ui.min': './targets/lib/index.css',
  },
  output: {
    path: path.resolve(__dirname, `../../.out/lib/v${pkg.version}/`),
    publicPath,
  },
  plugins: [
    new OptimizeCssAssetsPlugin({
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
    }),
  ],
});
