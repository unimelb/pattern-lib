// TODO: WIP - ADD THIS CONFIG TO BUILD:VUE IN PACKAGE.JSON
// require('dotenv').config();
// const webpack = require('webpack');
// const path = require('path');
// const merge = require('webpack-merge');
// // const sharedConfig = require('../webpack.config.shared.js');
// const baseConfig = require('../../webpack.config.base.js');
// const pkg = require('./../../package.json');

// process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// const isDev = process.env.NODE_ENV !== 'production';

// // Public path for static assets and icon sprite
// const loadExternalAssets = process.env.LOAD_EXTERNAL_ASSETS === 'true';
// const customPublicPath = loadExternalAssets
//   ? `${process.env.CDN_URL}/v${pkg.version}/`
//   : '';

// const mergedConfiguration = merge.smart(baseConfig, {
//   entry: {
//     vue: './targets/vue/index.js',
//   },
//   output: {
//     path: path.resolve(__dirname, '../../.out/'),
//     libraryTarget: 'commonjs2',
//     filename: '[name].js',
//   },
//   module: {
//     rules: [
//       {
//         // JavaScript (ES6)
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//       },
//       {
//         test: /\.(jpe?g|png|gif|svg|woff2?|ttf|otf|eot|ico)$/,
//         exclude: path.resolve(__dirname, '../../components/icons/sprite'),
//         loader: 'file-loader',
//         options: {
//           name: '[name].[ext]', // named assets not hashes
//           publicPath: customPublicPath,
//           emitFile: false, // don't emit static assets
//         },
//       },
//     ],
//   },
//   // plugins: isDev ? [] : [new webpack.optimize.UglifyJsPlugin()],
// });

// module.exports = mergedConfiguration;
