require('dotenv').config();

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SpritePlugin = require('svg-sprite-loader/plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const isDev = process.env.NODE_ENV != 'production';

module.exports = {
  resolve: {
    alias: {
      icons: path.resolve(__dirname, 'components/icons/')
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
        // Icons in CSS - e.g. url('icons/chevron-right.svg?fill=#fff')
        test: /\.svg$/,
        include: path.resolve(__dirname, 'components/icons/'),
        issuer: /\.css$/,
        use: [
          {
            loader: 'svg-url-loader', // https://github.com/bhovhannes/svg-url-loader
            options: {
              limit: 10,
              name: 'assets/[name]-[sha1:hash:5].[ext]',
              stripdeclarations: true
            }
          },
          'svg-fill-loader' // https://github.com/kisenka/svg-fill-loader
        ]
      },
      {
        // Static assets
        test: /\.(jpe?g|png|gif|svg|woff2?|ttf|otf|eot|ico)$/,
        exclude: path.resolve(__dirname, 'components/icons/'), // SVG icons require specific loaders
        loader: 'file-loader',
        options: {
          name: 'assets/[name]-[sha1:hash:5].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
      'CDNURL'
    ]),
    new ExtractTextPlugin({
      allChunks: true,
      filename: '[name].css',
      disable: isDev
    }),
    new SpritePlugin()
  ].concat(isDev ? [] : [
    new webpack.optimize.UglifyJsPlugin()
  ])
};
