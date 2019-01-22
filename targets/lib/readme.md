// Lint JS and Vue files
test: /\.(js|vue)\$/

// JavaScript (ES6)
test: /\.js\$/

// Sprite icons (extract mode -- let Ike deal with injecting the extracted sprite)
// https://github.com/kisenka/svg-sprite-loader
test: /\.svg\$/

// CSS (PostCSS)
test: /\.css\$/

{
test: /\.css\$/,
use: ExtractTextPlugin.extract({
fallback: {
loader: 'style-loader',
options: { sourceMap: isDev },
},
use: [
{
loader: 'css-loader',
options: {
autoprefixer: false, // handled by postcss-cssnext
importLoaders: 2, // two more loaders in the chain
minimize: !isDev,
sourceMap: isDev,
},
},
'svg-fill-loader/encodeSharp', // https://github.com/kisenka/svg-fill-loader#using-with-css-loader
{
loader: 'postcss-loader',
options: { sourceMap: isDev },
},
],
}),
},

// Vue components
test: /\.vue\$/

// Icons in CSS - e.g. url('~icons/chevron-right.svg?fill=#fff')
test: /\.svg$/,
include: path.resolve(__dirname, 'components/icons/sprite/'),
issuer: /\.css$/,
use: [
{
loader: 'svg-url-loader', // https://github.com/bhovhannes/svg-url-loader
options: {
limit: 1024,
name: '[name].[ext]',
stripdeclarations: true,
},
},
'svg-fill-loader', // https://github.com/kisenka/svg-fill-loader
],
},

// Static assets
test: /\.(jpe?g|png|gif|svg|woff2?|ttf|otf|eot|ico)\$/

// devServer
devServer: {
publicPath,
hot: true, // enable hot module replacement
overlay: true, // show overlay in browser on compiler error or warning
clientLogLevel: 'warning', // reduce browser console output
stats: 'minimal', // reduce terminal output

    // Work around security restriction
    // https://github.com/webpack/webpack-dev-server/issues/897
    disableHostCheck: true,
    headers: { 'Access-Control-Allow-Origin': '*' },

},
