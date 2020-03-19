// const puppeteer = require('puppeteer');
import { viewports, formatUrl } from './helpers';

const mainCategory = 'Cards';

const stories = [
  {
    category: 'Bio Header',
    pages: [
      'Small (Default)',
      'Wide',
    ],
  },
  {
    category: 'Contact',
    pages: [
      'One column',
      'Two column',
      'With map',
    ],
  },
  {
    category: 'Events',
    pages: [
      'Full width (horizontal)',
      'Vertical',
    ],
  },
  {
    category: 'Facts',
    pages: [
      'Size variations',
      'With Icons',
      'Smaller header class',
      'Top border, specify colour',
      'Thin border',
    ],
  },
  {
    category: 'Features Panel',
    pages: [
      'Features Panel (3 Col)',
      'Features Panel (2 Col)',
    ],
  },
  {
    category: 'Focus Boxes',
    pages: [
      '3 Col',
      '2 Col',
      'Version of no icon - white',
      'Version of no icon - inverted',
    ],
  },
  {
    category: 'GenericCard',
    pages: [
      'With with 3 subtitles',
      'With with links',
    ],
  },
  {
    category: 'News',
    pages: [
      '3 Column',
      '1 Column',
      'Buttons Underneath',
      'Buttons Underneath (Deprecated)',
    ],
  },
  {
    category: 'Staff List/Division',
    pages: [
      'Division Profile',
    ],
  },
  {
    category: 'Staff List/Division Head',
    pages: [
      'Division Head (3 Col)',
      'Division Heads (Single)',
      'Division Heads (Compact)',
    ],
  },
  {
    category: 'Staff List/Bios',
    pages: [
      'Staff bios',
      'Staff 3 cols with tel/email',
    ],
  },
];

describe(mainCategory, () => {
  stories.forEach((story) => {
    const { category } = story;

    describe(category, () => {
      story.pages.forEach((pag) => {
        viewports.forEach((vp) => {
          it(`${pag} matches ${vp.width} snapshot`, async () => {
            const params = {
              url: `${mainCategory}/${category}`,
              // category,
              story: pag,
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
  });
});
