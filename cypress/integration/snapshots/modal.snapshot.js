const category = 'Modal';

const stories = [
  'Default',
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

        cy.vistPage(params);

        cy.get('.btn').eq(0).click();

        cy.visitAndCheckSnapshot(params);
      });
    });
  });
});
