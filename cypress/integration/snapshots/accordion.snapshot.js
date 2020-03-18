const category = 'Accordion';

const stories = [
  'Grouped accordions, first panel open',
  'Mobile only toggle block',
  'Empty title',
  'Enquiry (toggle block)',
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
