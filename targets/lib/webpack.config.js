const merge = require('webpack-merge');

const sharedConfig = require('./webpack.config.shared.js');

module.exports = merge(sharedConfig, {
  entry: {
    ui: [
      './targets/lib/index.js',
      './targets/lib/index.css',
    ],
    docs: './targets/lib/docs.js',
  },
});
