import { viewports, formatUrl } from './helpers';

const mainCategory = 'Pathfinder';

const stories = [
  {
    category: 'Focus',
    pages: [
      'Focus pathfinder',
      'Compact Focus pathfinder',
    ],
  },
  {
    category: 'Image card',
    pages: [
      'Image card',
      'Image card (2 column)',
      'No image',
      'No image (2 column)',
    ],
  },
  {
    category: 'Contextual Link',
    pages: [
      'Longer titles',
      'No Image',
      'Legacy markup',
      'No Image inverted',
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
