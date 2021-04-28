const merge = require('webpack-merge');

const sharedConfig = require('./webpack.config.shared.js');

module.exports = merge(sharedConfig, {
  entry: {
    docs: './targets/lib/docs.js',
    ui: [
      './targets/lib/index.js',
      './targets/lib/index.css',
    ],
  },
});
