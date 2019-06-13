process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const isDev = process.env.NODE_ENV !== 'production';
const isMinified = process.env.TO_MINIFY === 'true';

module.exports = ({ options }) => ({
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
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
