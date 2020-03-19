import { viewports, formatUrl } from './helpers';

const category = 'Accordion';

const stories = [
  'Grouped accordions, first panel open',
  'Mobile only toggle block',
  'Enquiry (toggle block)',
];

//

describe(category, () => {
  stories.forEach((story) => {
    viewports.forEach((vp) => {
      it(`${story} matches snapshot`, async () => {
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
