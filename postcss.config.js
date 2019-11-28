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
    'postcss-cssnext': {
      browsers: [
        '> 1% in AU',
        'last 2 versions',
        'Firefox ESR',
        'Firefox 45',
        'not ie < 11',
        'iOS >= 8.4',
        'Safari >= 8',
        'Android >= 4.4',
      ],
    },
    'postcss-reporter': {
      throwError: !isDev,
    },
    cssnano: isMinified ? options.cssnano : false,
  },
});
