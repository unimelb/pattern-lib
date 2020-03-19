import { viewports, formatUrl } from '../helpers';

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

describe(mainCategory, () => {
  stories.forEach((story) => {
    const { category } = story;

    describe(category, () => {
      story.pages.forEach((pag) => {
        viewports.forEach((vp) => {
          it(`${pag} matches ${vp.width} snapshot`, async () => {
            const params = {
              url: `${mainCategory}/${category}`,
              story: pag,
            };

            const url = formatUrl(params);

            const page = await browser.newPage();
            await page.setViewport(vp);
            await page.goto(url);

            const image = await page.screenshot({ fullPage: true });

            expect(image).toMatchImageSnapshot();
          });
        });
      });
    });
  });
});
