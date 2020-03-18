const category = 'Forms';

const stories = [
  'Text fields',
  'Inline form',
  'Inline search form',
  'Inline search form (inverse)',
  'Inline search form (min)',
  'MCE form markup',
  'MCE date selector',
  'Styled select',
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
