import {
  mount,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import CardArticle from '../CardArticle.vue';

expect.extend(toHaveNoViolations);

describe('CardArticle', () => {
  it('should match snapshot', () => {
    const result = mount(CardArticle, {
      propsData: {
        title: 'mock title',
        href: 'www.unimelb.edu.au',
        category: 'mock category',
      },
    }).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = mount(CardArticle, {
      propsData: {
        title: 'mock title',
        href: 'www.unimelb.edu.au',
        category: 'mock category',
      },
    }).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
