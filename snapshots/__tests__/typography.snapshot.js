import { viewports, formatUrl } from '../helpers';

const category = 'Typography';

const stories = [
  'Titles',
  'Heading Component',
  'Long headings',
  'Lead paragraph',
  'Links',
  'Links - external',
  'Lists - ordered',
  'Lists - ordered, giant',
  'Lists - unordered',
  'Lists - spaced for longer content',
  'Lists - variant bullets',
  'Lists - mixed',
  'Preformatted text',
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
