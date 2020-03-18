const category = 'Typography';

const stories = [
  'Titles',
  'Heading Component',
  'Long headings',
  'Lead paragraph',
  'Links',
  'Links - external',
  'Lists - ordered',
  'Lists - ordered, giant',
  'Lists - unordered',
  'Lists - spaced for longer content',
  'Lists - variant bullets',
  'Lists - mixed',
  'Preformatted text',
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
