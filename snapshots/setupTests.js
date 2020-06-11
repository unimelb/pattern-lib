const { configureToMatchImageSnapshot } = require('jest-image-snapshot');
const { TIMER_90000 } = require('../constants/timers');

const toMatchImageSnapshot = configureToMatchImageSnapshot({
  customDiffConfig: { threshold: 0.5 },
  blur: 1,
  failureThresholdType: 'percent', // percent of image or number of pixels
});

expect.extend({ toMatchImageSnapshot });

jest.setTimeout(TIMER_90000);
