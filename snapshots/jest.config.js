module.exports = {
  preset: 'jest-puppeteer',
  testRegex: './*\\.snapshot\\.js$',
  setupTestFrameworkScriptFile: '<rootDir>/setupTests.js',
};
