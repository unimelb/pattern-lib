import {
  mount,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import CardArticleList from '../CardArticleList.vue';

expect.extend(toHaveNoViolations);

const items = [
  {
    href: 'https://www.unimelb.edu.au/',
    title: 'Test title',
    category: 'test category',
  },
  {
    href: 'https://www.unimelb.edu.au/',
    title: 'Test title',
    category: 'test category',
  },
  {
    href: 'https://www.unimelb.edu.au/',
    title: 'Test title',
    category: 'test category',
  },
  {
    href: 'https://www.unimelb.edu.au/',
    title: 'Test title',
    category: 'test category',
  },
  {
    href: 'https://www.unimelb.edu.au/',
    title: 'Test title',
    category: 'test category',
  },
  {
    href: 'https://www.unimelb.edu.au/',
    title: 'Test title',
    category: 'test category',
  },
];

describe('CardArticleList', () => {
  it('should match snapshot', () => {
    const result = mount(CardArticleList, {
      propsData: {
        items,
      },
    }).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = mount(CardArticleList, {
      propsData: {
        items,
      },
    }).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
