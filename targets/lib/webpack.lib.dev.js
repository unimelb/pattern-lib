require('dotenv').config();
const path = require('path');
const webpack = require('webpack');

// plugins
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const packageDotJSON = require('../../package.json');

// Public path for static assets and icon sprite
const loadExternalAssets = process.env.LOAD_EXTERNAL_ASSETS === 'true';
const customPublicPath = loadExternalAssets
  ? `${process.env.CDN_URL}/v${packageDotJSON.version}/`
  : '';

// --------
const isDev = process.env.NODE_ENV !== 'production';
const versionToLoad = process.env.LIB_LOAD_VERSION === 'auto' ? pkg.version : process.env.LIB_LOAD_VERSION;
const publicPath = !isDev && versionToLoad ? `${process.env.CDN_URL}/v${versionToLoad}/` : '';
// --------

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    ui: ['./targets/lib/index.js', './targets/lib/index.css'],
  },
  output: {
    path: path.resolve(__dirname, `../../.out/lib/v${packageDotJSON.version}/`),
    publicPath,
    filename: '[name].js',
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
      icons: path.resolve(__dirname, '../../components/icons/sprite/'),
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
            loader: 'style-loader'
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
        include: path.resolve(__dirname, '../../components/icons/sprite/'),
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
        exclude: path.resolve(__dirname, '../../components/icons/sprite/'),
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: customPublicPath,
        },
      },
      {
        test: /\.svg$/,
        issuer: /sprite\/index\.js$/,
        loader: 'svg-sprite-loader',
        options: {
          extract: true,
          symbolId: 'icon-[name]',
        },
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
      'CDN_URL',
      'LOAD_EXTERNAL_ASSETS',
    ]),
    new VueLoaderPlugin(),
    new SpriteLoaderPlugin({ plainSprite: true }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './targets/lib/index.html',
      inject: true,
    }),
  ],
  devServer: {
    publicPath,
    overlay: true,
    clientLogLevel: 'warning',
    stats: 'normal',
    disableHostCheck: false,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
};
