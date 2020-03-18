const mainCategory = 'Pathfinder';

const stories = [
  {
    category: 'Focus',
    pages: [
      'Focus pathfinder',
      'Compact Focus pathfinder',
    ],
  },
  {
    category: 'Image card',
    pages: [
      'Image card',
      'Image card (2 column)',
      'No image',
      'No image (2 column)',
    ],
  },
  {
    category: 'Contextual Link',
    pages: [
      'Longer titles',
      'No Image',
      'Legacy markup',
      'No Image inverted',
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
