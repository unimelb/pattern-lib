const mainCategory = 'Side Panel';

const stories = [
  {
    category: 'Left',
    pages: [
      'With section',
      'With content blocks',
    ],
  },
  {
    category: 'Right',
    pages: [
      'With section',
      'With content blocks',
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
