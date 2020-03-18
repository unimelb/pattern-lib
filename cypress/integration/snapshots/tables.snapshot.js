const category = 'Tables';

const stories = [
  'Default',
  'Default no <thead>',
  'Default (Not Responsive)',
  'Default (Compacted)',
  'Complex',
  'Complex (Compacted)',
  'Centered',
  'Tight padded',
  'Loose padded',
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
