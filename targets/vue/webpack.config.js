require('dotenv').config();

const path = require('path');
const merge = require('webpack-merge');
const sharedConfig = require('../webpack.config.shared.js');
const pkg = require('../../package.json');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Public path for static assets and icon sprite
const loadExternalAssets = process.env.LOAD_EXTERNAL_ASSETS === 'true';
const customPublicPath = loadExternalAssets ? `${process.env.CDN_URL}/v${pkg.version}/` : '';

module.exports = merge.smart(sharedConfig, {
  entry: {
    vue: './targets/vue/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../../.out/'),
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg|woff2?|ttf|otf|eot|ico)$/,
        exclude: path.resolve(__dirname, '../../components/icons/sprite'),
        loader: 'file-loader',
        options: {
          name: '[name].[ext]', // named assets not hashes
          publicPath: customPublicPath,
          emitFile: false, // don't emit static assets
        },
      },
    ],
  },
});
