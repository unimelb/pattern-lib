const category = 'Filter/Components';

const stories = [
  'Accordion Filter',
  'Cards Filter',
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
