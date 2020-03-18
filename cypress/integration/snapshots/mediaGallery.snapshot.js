const mainCategory = 'Media Gallery';

const stories = [
  {
    category: 'In Page',
    pages: [
      'Default',
    ],
  },
  {
    category: 'Overlay',
    pages: [
      '2 col',
      '3 col',
      '4 col',
    ],
  },
  {
    category: 'Overlay with captions',
    pages: [
      '2 col',
      '3 col',
      '4 col',
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
