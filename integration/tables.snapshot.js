import { viewports, formatUrl } from './helpers';

const category = 'Tables';

const stories = [
  'Default',
  'Default no <thead>',
  'Default (Not Responsive)',
  'Default (Compacted)',
  'Complex',
  'Complex (Compacted)',
  'Centered',
  'Tight padded',
  'Loose padded',
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
