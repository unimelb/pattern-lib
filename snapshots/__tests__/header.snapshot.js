import { viewports, formatUrl } from '../helpers';

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
