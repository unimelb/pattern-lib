const path = require('path');
const merge = require('webpack-merge');

const genDefaultConfig = require('@storybook/vue/dist/server/config/defaults/webpack.config.js');
const baseConfig = require('../webpack.config.base.js');

module.exports = (storybookConfig, env) => {
  const config = genDefaultConfig(storybookConfig, env);

  // Keep only storybook's JS and Vue loaders
  config.module.rules = config.module.rules.filter((rule) => {
    return rule.test.test('foo.js');
  });

  /* Markdown loader */
  config.module.rules.push({
    test: /\.md$/,
    use: "raw-loader"
  });

  const mergedConfig = merge(config, baseConfig);
  return mergedConfig;
};
