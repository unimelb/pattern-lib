import { viewports, formatUrl } from '../helpers';

const category = 'Forms';

const stories = [
  'Text fields',
  'Inline form',
  'Inline search form',
  'Inline search form (inverse)',
  'Inline search form (min)',
  'MCE form markup',
  'MCE date selector',
  'Styled select',
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
