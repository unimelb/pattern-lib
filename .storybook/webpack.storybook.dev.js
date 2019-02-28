require('dotenv').config();
const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  mode: 'development',
  resolve: {
    alias: {
      '.storybook': path.resolve(__dirname, './'),
      icons: path.resolve(__dirname, '../components/icons/sprite/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          emitError: true,
          emitWarning: true,
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
            },
          },
          'svg-fill-loader/encodeSharp',
          {
            loader: 'postcss-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, '../components/icons/sprite/'),
        issuer: /\.css$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 1024,
              name: '[name].[ext]',
              stripdeclarations: true,
            },
          },
          'svg-fill-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|woff2?|ttf|otf|eot|ico)$/,
        exclude: path.resolve(__dirname, '../components/icons/sprite/'),
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
      {
        test: /\.svg$/,
        issuer: /sprite\/index\.js$/,
        loader: 'svg-sprite-loader',
        options: {
          symbolId: 'icon-[name]',
        },
      },
      {
        test: /\.md$/,
        use: 'raw-loader',
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
      'CDN_URL',
      'LOAD_EXTERNAL_ASSETS',
    ]),
  ],
};
