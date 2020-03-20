import { viewports, formatUrl } from '../helpers';

const category = 'Document List';

const stories = [
  'Document List',
  'Document thumbnail list',
  'Document thumbnail list - four col',
  'Container document list (for CMS)',
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
