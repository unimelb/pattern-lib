const category = 'Content Block';

const stories = [
  'Default (medium)',
  'Large + inverted',
  'Headings',
  'Short + light',
  'Combination News & Events',
];

const viewports = Cypress.config('viewports');

describe(category, () => {
  stories.forEach((story) => {
    viewports.forEach((vp) => {
      it(`${story} matches ${vp} snapshot`, () => {
        const params = {
          url: category,
          category,
          story,
          vp,
        };

        cy.visitAndCheckSnapshot(params);
      });
    });
  });
});
