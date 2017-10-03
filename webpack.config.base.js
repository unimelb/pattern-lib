require('dotenv').config();

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pkg = require('./package.json');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const isDev = process.env.NODE_ENV != 'production';

// Public path for static assets and icon sprite
const loadExternalAssets = process.env.LOAD_EXTERNAL_ASSETS === 'true';
const customPublicPath = loadExternalAssets ? `${process.env.CDN_URL}/v${pkg.version}/` : '';

module.exports = {
  resolve: {
    alias: {
      decorators: path.resolve(__dirname, '.storybook/decorators/'),
      docs: path.resolve(__dirname, 'docs/'),
      icons: path.resolve(__dirname, 'components/icons/'),
      shared: path.resolve(__dirname, 'components/shared/')
    }
  },
  module: {
    rules: [
      {
        // CSS (PostCSS)
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: {
            loader: 'style-loader',
            options: { sourceMap: isDev }
          },
          use: [
            {
              loader: 'css-loader',
              options: {
                autoprefixer: false, // handled by postcss-cssnext
                importLoaders: 2, // two more loaders in the chain
                minimize: !isDev,
                sourceMap: isDev
              }
            },
            'svg-fill-loader/encodeSharp', // https://github.com/kisenka/svg-fill-loader#using-with-css-loader
            {
              loader: 'postcss-loader',
              options: { sourceMap: isDev }
            }
          ]
        })
      },
      {
        // Vue components
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        // Icons in CSS - e.g. url('~icons/chevron-right.svg?fill=#fff')
        test: /\.svg$/,
        include: path.resolve(__dirname, 'components/icons/'),
        issuer: /\.css$/,
        use: [
          {
            loader: 'svg-url-loader', // https://github.com/bhovhannes/svg-url-loader
            options: {
              limit: 1024,
              name: '[name].[ext]',
              stripdeclarations: true
            }
          },
          'svg-fill-loader' // https://github.com/kisenka/svg-fill-loader
        ]
      },
      {
        // Icon sprite
        test: /sprite\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: customPublicPath
            }
          }
        ].concat(isDev ? [] : [
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                { removeDoctype: false },
                { removeUselessDefs: false }
              ]
            }
          }
        ])
      },
      {
        // Static assets
        test: /\.(jpe?g|png|gif|svg|woff2?|ttf|otf|eot|ico)$/,
        exclude: path.resolve(__dirname, 'components/icons/'),
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: customPublicPath
        }
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
      'CDN_URL',
      'LOAD_EXTERNAL_ASSETS'
    ]),
    new ExtractTextPlugin({
      allChunks: true,
      filename: '[name].css',
      disable: isDev
    })
  ].concat(isDev ? [] : [
    new webpack.optimize.UglifyJsPlugin()
  ])
};
