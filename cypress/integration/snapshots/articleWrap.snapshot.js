const category = 'Article';

const stories = [
  'Default',
  'No metadata',
  'News article with categories',
  'News article with categories and tags',
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
