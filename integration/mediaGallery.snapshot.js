import { viewports, formatUrl } from './helpers';

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
              // category,
              story: pag,
              // vp,
            };

            const url = formatUrl(params);

            const page = await browser.newPage();
            await page.goto(url);
            await page.setViewport(vp);

            const image = await page.screenshot({ fullPage: true });

            // API from jest-image-snapshot
            expect(image).toMatchImageSnapshot();
          });
        });
      });
    });
  });
});
