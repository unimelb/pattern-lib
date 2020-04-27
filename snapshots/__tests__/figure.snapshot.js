import { viewports, formatUrl } from '../helpers';

const category = 'Figure';

const stories = [
  'medium inset right figure',
  'medium inset left figure',
  'Small inset left figure',
  'Small inset right figure',
  'large inset left figure',
  'large inset right figure',
  'Inline - Full',
  'Inline - Large',
  'Inline - Medium',
  'Inline - small',
  'Large inset right video',
  'Large inset left video',
  'Medium inset right video',
  'Medium inset left video',
  'Small inset right video',
  'Small inset left video',
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
