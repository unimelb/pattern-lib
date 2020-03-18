const mainCategory = 'Listing';

const stories = [
  {
    category: 'Image Listing',
    pages: [
      'Three Column',
      'Two Column',
      'Color variations',
      'No Padding (Brand hub variation)',
      'Hero Image',
    ],
  },
  {
    category: 'Container',
    pages: [
      '1 Column',
      '2 Column',
      '3 Column',
      '4 Column',
      'Link List',
      'Logo Listing',
    ],
  },
];

const viewports = Cypress.config('viewports');

describe(mainCategory, () => {
  stories.forEach((story) => {
    const { category } = story;

    describe(category, () => {
      story.pages.forEach((page) => {
        viewports.forEach((vp) => {
          it(`${page} matches ${vp} snapshot`, () => {
            const params = {
              url: `${mainCategory}/${category}`,
              category,
              story: page,
              vp,
            };

            cy.visitAndCheckSnapshot(params);
          });
        });
      });
    });
  });
});
