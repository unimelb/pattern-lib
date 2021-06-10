require('dotenv').config();
const merge = require('webpack-merge');
const baseConfig = require('../webpack.config.base.js');

module.exports = (storybookConfig, env, defaultConfig) => {
  // Keep only storybook's JS rule
  defaultConfig.module.rules = defaultConfig.module.rules.filter((rule) => rule.test.test('foo.js'));

  const mergedConfig = merge(defaultConfig, baseConfig, {
    module: {
      rules: [
        {
          // Sprite icons (auto-inject mode)
          test: /\.svg$/,
          issuer: /sprite\/index\.js$/,
          loader: 'svg-sprite-loader', // https://github.com/JetBrains/svg-sprite-loader
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
