const mainCategory = 'Header';

const stories = [
  {
    category: 'Event',
    pages: [
      'Default',
    ],
  },
  {
    category: 'Level 1',
    pages: [
      'Default',
      'Entity identifier',
      'Dual entity identifier',
      'Homepage campaign (card)',
      'Homepage campaign (button)',
    ],
  },
  {
    category: 'Level 2',
    pages: [
      'Default',
      'Entity identifier',
      'Dual entity identifier',
      'Campaign banner',
      'Campaign banner (no logo)',
    ],
  },
  {
    category: 'Level 3',
    pages: [
      'Default',
      'Alt',
    ],
  },
  {
    category: 'Split Section',
    pages: [
      'Default',
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
