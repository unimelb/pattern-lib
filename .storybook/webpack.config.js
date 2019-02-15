require("dotenv").config();
const merge = require('webpack-merge');
const baseStorybookConfig = require('./webpack.config.storybook.js');

module.exports = (storybookConfig, env, defaultConfig) => {
  // Keep only storybook's JS rule
  defaultConfig.module.rules = defaultConfig.module.rules.filter(rule => rule.test.test('foo.js'));
  const mergedConfig = merge(defaultConfig, baseStorybookConfig);
  return mergedConfig;
};
