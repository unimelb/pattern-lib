import { viewports, formatUrl } from '../helpers';

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
