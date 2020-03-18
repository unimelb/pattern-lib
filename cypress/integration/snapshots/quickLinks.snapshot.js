const category = 'Quick Link Menu';

const stories = [
  'Default',
  'Default, condensed variant',
  'Alternate B',
  'Alternate C',
  'Alternate D',
  'Secondary Links (1 column)',
  'Secondary Links (2 column)',
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
