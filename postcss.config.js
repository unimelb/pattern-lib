process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const isDev = process.env.NODE_ENV !== 'production';
const isMinified = process.env.MINIFY_CSS === 'true';

const imagePaths = [
  'components/icons/sprite/',
  'components/',
];

module.exports = ({ options }) => ({
  plugins: {
    'postcss-import': {},
    'postcss-assets': {
      loadPaths: imagePaths,
    },
    'postcss-url': {},
    'postcss-inline-svg': {
      paths: imagePaths,
    },
    'postcss-nested': {},
    'postcss-preset-env': {
      stage: 1,
      features: {
        'custom-media-queries': true,
        'color-mod-function': true,
      },
      importFrom: './components/_vars.css',
      preserve: false,
    },
    'postcss-calc': {},
    // 'css-mqpacker': {},
    'postcss-reporter': {
      throwError: !isDev,
    },
    cssnano: isMinified ? options.cssnano : false,
  },
});
