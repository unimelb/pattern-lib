const path = require('path');

const genDefaultConfig = require('@storybook/vue/dist/server/config/defaults/webpack.config.js');
const customConfig = require(path.resolve(__dirname, '../webpack.config.js'));

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  config.module.rules = config.module.rules.map((rule) => {
    if (!rule.test.test('foo.css')) return rule;

    const cssRule = customConfig.module.rules[1];
    cssRule.include = path.resolve(__dirname, '../');
    return cssRule;
  });

  config.plugins.push(...customConfig.plugins);

  return config;
};
