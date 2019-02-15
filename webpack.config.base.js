// // TODO: WIP - REMOVE THIS BASE CONFIG.
// const path = require('path');
// const webpack = require('webpack');
// // const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// // const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const pkg = require('./package.json');

// process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// const isDev = process.env.NODE_ENV !== 'production';

// // Public path for static assets and icon sprite
// const loadExternalAssets = process.env.LOAD_EXTERNAL_ASSETS === 'true';
// const customPublicPath = loadExternalAssets
//     ? `${process.env.CDN_URL}/v${pkg.version}/`
//     : '';

// module.exports = {
//     devtool: isDev && 'source-map',
//     resolve: {
//         alias: {
//             '.storybook': path.resolve(__dirname, '.storybook/'),
//             icons: path.resolve(__dirname, 'components/icons/sprite/'),
//         },
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(js|vue)$/,
//                 exclude: /node_modules/,
//                 enforce: 'pre',
//                 loader: 'eslint-loader',
//                 options: {
//                     emitError: true,
//                     emitWarning: true,
//                 },
//             },
//             {
//                 test: /\.vue$/,
//                 loader: 'vue-loader',
//             },
//             {
//                 test: /\.css$/,
//                 use: [
//                     {
//                         loader: MiniCssExtractPlugin.loader,
//                     },
//                     {
//                         loader: 'css-loader',
//                         options: {
//                             autoprefixer: false,
//                             importLoaders: 2,
//                             minimize: false,
//                             sourceMap: true,
//                         },
//                     },
//                     'svg-fill-loader/encodeSharp',
//                     {
//                         loader: 'postcss-loader',
//                         options: { sourceMap: true },
//                     },
//                 ],
//             },
//             {
//                 test: /\.svg$/,
//                 include: path.resolve(__dirname, 'components/icons/sprite/'),
//                 issuer: /\.css$/,
//                 use: [
//                     {
//                         loader: 'svg-url-loader',
//                         options: {
//                             limit: 1024,
//                             name: '[name].[ext]',
//                             stripdeclarations: true,
//                         },
//                     },
//                     'svg-fill-loader',
//                 ],
//             },
//             {
//                 test: /\.(jpe?g|png|gif|svg|woff2?|ttf|otf|eot|ico)$/,
//                 exclude: path.resolve(__dirname, 'components/icons/sprite/'),
//                 loader: 'file-loader',
//                 options: {
//                     name: '[name].[ext]',
//                     publicPath: customPublicPath,
//                 },
//             },
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 loader: 'babel-loader',
//             },
//         ],
//     },
//     plugins: [
//         new webpack.EnvironmentPlugin([
//             'NODE_ENV',
//             'CDN_URL',
//             'LOAD_EXTERNAL_ASSETS',
//         ]),
//         new MiniCssExtractPlugin({
//             filename: '[name].css',
//         }),
//     ],
// };
