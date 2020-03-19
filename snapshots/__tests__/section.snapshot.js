import { viewports, formatUrl } from '../helpers';

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
