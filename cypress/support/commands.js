import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

Cypress.Commands.overwrite('log', (subject, message) => cy.task('log', message));

Cypress.Commands.add('visitAndCheckSnapshot', ({
  url, category, story, vp,
}) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedStory = encodeURIComponent(story);

  cy.viewport(vp);

  cy.visit(`iframe.html?selectedKind=${encodedUrl}&selectedStory=${encodedStory}`);

  cy.checkSnapshot({
    category, story, vp,
  });
});

Cypress.Commands.add('checkSnapshot', ({
  category, story, vp,
}) => {
  cy.get('#root').matchImageSnapshot(`${category}-${story}.${vp}`);
});

Cypress.Commands.add('vistPage', ({
  url, story, vp,
}) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedStory = encodeURIComponent(story);

  cy.viewport(vp);

  cy.visit(`iframe.html?selectedKind=${encodedUrl}&selectedStory=${encodedStory}`);
});

Cypress.Commands.add('setMobileViewPort', () => {
  cy.viewport('iphone-5');
});

Cypress.Commands.add('setDesktopViewPort', () => {
  cy.viewport('macbook-11');
});

// Image snapshot
addMatchImageSnapshotCommand({
  failureThreshold: 0.05, // threshold for entire image
  failureThresholdType: 'percent', // percent of image or number of pixels
  customDiffDir: 'cypress/snapshots/__diff_output__',
  capture: 'viewport', // capture viewport in screenshot
});
