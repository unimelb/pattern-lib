require('dotenv').config();

const configs = {
  development: require('./webpack.lib.dev.js'),
  production: require('./webpack.lib.prod.js')
};

const ENV = process.env.NODE_ENV;

const environmentConfig = (() => {
  switch (ENV) {
    case 'production':
      return configs.production;
    case 'development':
    default:
      return configs.development;
  }
})();

console.log('env >>>> ', ENV);
console.log('environmentConfig >>>> ', environmentConfig);

module.exports = environmentConfig;