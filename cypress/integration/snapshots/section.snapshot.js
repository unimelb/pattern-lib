const mainCategory = 'Section';

const stories = [
  {
    category: 'Crest',
    pages: [
      'Small width',
      'Divider',
      'Divider - subtitle',
    ],
  },
  {
    category: 'Focus',
    pages: [
      'Default',
      'With button',
    ],
  },
  {
    category: 'Section',
    pages: [
      'BG - White',
      'BG - Inverted',
      'BG - Alt',
    ],
  },
  {
    category: 'Two Column',
    pages: [
      'Left',
      'Right',
      'In small section',
      'With text in sidebar',
    ],
  },
  {
    category: 'Split Section',
    pages: [
      'Left',
      'Right',
      'Quote Left',
      'Quote Right',
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
