const category = 'Block Quotation';

const stories = [
  'Default',
  'With Sub cite',
  'Small',
  'With large quote marks',
  'With borders',
  'Without author',
  'Long',
  'Inverted',
  'Inverted with borders',
  'Raw (no classes)',
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
