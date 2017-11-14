require('dotenv').config();

const path = require('path');
const merge = require('webpack-merge');
const sharedConfig = require('../webpack.config.shared.js');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

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
          emitFile: false, // don't emit static assets
        },
      },
    ],
  },
});
