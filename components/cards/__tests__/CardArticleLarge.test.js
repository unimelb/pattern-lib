import {
  mount,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import CardArticleLarge from '../CardArticleLarge.vue';

expect.extend(toHaveNoViolations);

describe('CardArticleLarge', () => {
  it('should match snapshot', () => {
    const result = mount(CardArticleLarge, {
      propsData: {
        title: 'mock title',
        href: 'www.unimelb.edu.au',
        category: 'mock category',
        img: "{ src: 'https://picsum.photos/seed/1/540/360', alt: 'Image for example purposes.' }",
      },
    }).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = mount(CardArticleLarge, {
      propsData: {
        title: 'mock title',
        href: 'www.unimelb.edu.au',
        category: 'mock category',
        img: "{ src: 'https://picsum.photos/seed/1/540/360', alt: 'Image for example purposes.' }",
      },
    }).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
