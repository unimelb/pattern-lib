const category = 'Figure';

const stories = [
  'medium inset right figure',
  'medium inset left figure',
  'Small inset left figure',
  'Small inset right figure',
  'large inset left figure',
  'large inset right figure',
  'Inline - Full',
  'Inline - Large',
  'Inline - Medium',
  'Inline - small',
  'Large inset right video',
  'Large inset left video',
  'Medium inset right video',
  'Medium inset left video',
  'Small inset right video',
  'Small inset left video',
  'Full Width Image',
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
