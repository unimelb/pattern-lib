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
      'Event alt',
      '<button> element',
    ],
  },
  {
    category: 'Icons',
    pages: [
      'Icons',
      'No Icon',
      'Icon on left',
      'Large icon',
    ],
  },
  {
    category: 'Adjacent',
    pages: [
      'Default',
      'Full width',
      'Prev/next aligned buttons',
    ],
  },
  {
    category: 'Width',
    pages: [
      'Default',
      'Wide',
      'Extra wide',
      'Full width',
    ],
  },
  {
    category: 'Sizes',
    pages: [
      'Default',
      'Extra small',
      'small',
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
            cy.checkSnapshot(`${mainCategory}/${category}`, `${category}-${page}`, vp);
          });
        });
      });
    });
  });
});
