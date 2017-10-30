require('dotenv').config();

const path = require('path');
const merge = require('webpack-merge');
const sharedConfig = require('../webpack.config.shared.js');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = merge(sharedConfig, {
  entry: {
    vue: './targets/vue/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../../.out/'),
    filename: 'vue.js',
    libraryTarget: 'commonjs2',
  },
});
