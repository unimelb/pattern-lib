require('dotenv').config();
const merge = require('webpack-merge');

const configs = {
  development: require('./webpack.storybook.dev.js'),
  production: require('./webpack.storybook.prod.js'),
};

const ENV = process.env.NODE_ENV;

const environmentConfig = (() => {
  switch (ENV) {
    case 'production':
      return configs.production;
    case 'development':
    default:
      return configs.development;
  }
})();


module.exports = (storybookConfig, env, defaultConfig) => {
  // Keep only storybook's JS rule
  defaultConfig.module.rules = defaultConfig.module.rules.filter(rule => rule.test.test('foo.js'));

  // merge default storybook config with environment config
  const mergedConfig = merge(defaultConfig, environmentConfig);

  // Return the altered config
  return mergedConfig;
};
