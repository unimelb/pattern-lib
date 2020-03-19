const { configureToMatchImageSnapshot } = require('jest-image-snapshot');

const toMatchImageSnapshot = configureToMatchImageSnapshot({
  customDiffConfig: { threshold: 0.5 },
  blur: 1,
  // failureThreshold: 0, // threshold for entire image
  failureThresholdType: 'percent', // percent of image or number of pixels
});

expect.extend({ toMatchImageSnapshot });

jest.setTimeout(90000);
