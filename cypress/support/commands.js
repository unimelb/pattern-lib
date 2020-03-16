import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

Cypress.Commands.overwrite('log', (subject, message) => cy.task('log', message));

Cypress.Commands.add('checkSnapshot', (category, story, vp) => {
  cy.visit(`/?selectedKind=${category}&selectedStory=${story}${Cypress.env('params')}`);

  cy.viewport(vp);

  cy.get('#storybook-preview-iframe').matchImageSnapshot(`${story}.${vp}`);
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
  capture: 'fullPage', // capture viewport in screenshot
});
