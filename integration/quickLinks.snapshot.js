import { viewports, formatUrl } from './helpers';

const category = 'Quick Link Menu';

const stories = [
  'Default',
  'Default, condensed variant',
  'Alternate B',
  'Alternate C',
  'Alternate D',
  'Secondary Links (1 column)',
  'Secondary Links (2 column)',
];


describe(category, () => {
  stories.forEach((story) => {
    viewports.forEach((vp) => {
      it(`${story} matches ${vp.width} snapshot`, async () => {
        const params = {
          url: category,
          // category,
          story,
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
