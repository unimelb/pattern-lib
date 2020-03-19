import { viewports, formatUrl } from '../helpers';

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
          story,
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
