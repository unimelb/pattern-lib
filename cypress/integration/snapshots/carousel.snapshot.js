const category = 'Carousel';

const stories = [
  'Default',
  'Long',
];

const viewports = Cypress.config('viewports');

describe('Carousel', () => {
  stories.forEach((story) => {
    viewports.forEach((vp) => {
      it(`${story} matches ${vp} snapshot`, () => {
        cy.checkSnapshot(category, story, vp);
      });
    });
  });
});
