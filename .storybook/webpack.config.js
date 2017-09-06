const genDefaultConfig = require('@storybook/vue/dist/server/config/defaults/webpack.config.js');
const customConfig = require('../webpack.config.js');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  config.module.rules.map((rule) => {
    if (!rule.test.test('foo.css')) return rule;
    return customConfig.module.rules[2];
  });

  return config;
};
