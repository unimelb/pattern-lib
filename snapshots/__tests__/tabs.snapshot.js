import { viewports, formatUrl } from '../helpers';

const category = 'Tabs';

const stories = [
  'Tabs, isolated',
  'Tabs, in context',
  'Tabs (alt)',
  'Tabs, using a select',
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
