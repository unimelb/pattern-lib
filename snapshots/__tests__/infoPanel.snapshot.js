import { viewports, formatUrl } from '../helpers';

const category = 'Info Panel';

const stories = [
  'Default',
];

describe(category, () => {
  stories.forEach((story) => {
    viewports.forEach((vp) => {
      it(`${story} matches ${vp.width} snapshot`, async () => {
        const params = {
          url: category,
          story,
        };

        const url = formatUrl(params);

        const page = await browser.newPage();
        await page.setViewport(vp);
        await page.goto(url);

        const image = await page.screenshot({ fullPage: true });

        // API from jest-image-snapshot
        expect(image).toMatchImageSnapshot();
      });
    });
  });
});
