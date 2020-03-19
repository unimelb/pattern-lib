import { viewports, formatUrl } from '../helpers';

const mainCategory = 'Media Gallery';

const stories = [
  {
    category: 'In Page',
    pages: [
      'Default',
    ],
  },
  {
    category: 'Overlay',
    pages: [
      '2 col',
      '3 col',
      '4 col',
    ],
  },
  {
    category: 'Overlay with captions',
    pages: [
      '2 col',
      '3 col',
      '4 col',
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
