const mainCategory = 'Buttons';

const stories = [
  {
    category: 'Types',
    pages: [
      'Primary (default)',
      'Secondary',
      'Inverted',
      'CTA',
      'Campaign',
      'Event',
      'Event Alt',
      '<button> element',
    ],
  },
  {
    category: 'Icons',
    pages: [
      'Icons',
      'No Icon',
      'Icon on left',
      'Large Icon',
    ],
  },
  {
    category: 'Adjacent',
    pages: [
      'Full Width',
      'Prev/Next aligned buttons',
    ],
  },
  {
    category: 'Sizes',
    pages: [
      'Extra Small',
      'Small',
    ],
  },
  {
    category: 'CMS',
    pages: [
      'Default (btn--icon)',
      'Inverted',
      'Inverse (btn--icon-before)',
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
