require('dotenv').config();
const merge = require('webpack-merge');

const genDefaultConfig = require('@storybook/vue/dist/server/config/defaults/webpack.config.js');
const baseConfig = require('../webpack.config.base.js');

module.exports = (storybookConfig, env) => {
  const defaultConfig = genDefaultConfig(storybookConfig, env);

  // Keep only storybook's JS rule
  defaultConfig.module.rules = defaultConfig.module.rules.filter(rule => rule.test.test('foo.js'));

  const mergedConfig = merge(defaultConfig, baseConfig, {
    module: {
      rules: [
        {
          // Sprite icons (auto-inject mode)
          test: /\.svg$/,
          issuer: /sprite\/index\.js$/,
          loader: 'svg-sprite-loader', // https://github.com/kisenka/svg-sprite-loader
          options: {
            symbolId: 'icon-[name]',
          },
        },
        {
          // Markdown loader
          test: /\.md$/,
          use: 'raw-loader',
        },
      ],
    },
  });

  return mergedConfig;
};
