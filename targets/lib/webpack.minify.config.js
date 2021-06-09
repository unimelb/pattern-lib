const merge = require('webpack-merge');

const sharedConfig = require('./webpack.config.shared.js');

module.exports = merge(sharedConfig, {
  entry: {
    'ui.min': [
      './targets/lib/index.js',
      './targets/lib/index.css',
    ],
  },
});
