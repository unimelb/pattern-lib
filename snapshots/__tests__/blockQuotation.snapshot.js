import { viewports, formatUrl } from '../helpers';

const category = 'Block Quotation';

const stories = [
  'Default',
  'With Sub cite',
  'Small',
  'With large quote marks',
  'With borders',
  'Without author',
  'Long',
  'Inverted',
  'Inverted with borders',
  'Raw (no classes)',
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
