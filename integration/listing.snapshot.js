import { viewports, formatUrl } from './helpers';

const mainCategory = 'Listing';

const stories = [
  {
    category: 'Image Listing',
    pages: [
      'Three Column',
      'Two Column',
      'Color variations',
      'No Padding (Brand hub variation)',
      'Hero Image',
    ],
  },
  {
    category: 'Container',
    pages: [
      '1 Column',
      '2 Column',
      '3 Column',
      '4 Column',
      'Link List',
      'Logo Listing',
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
