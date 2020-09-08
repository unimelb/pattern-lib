import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import ArticleWrap from '../ArticleWrap.vue';

expect.extend(toHaveNoViolations);

describe('ArticleWrap', () => {
  it('should match snapshot', () => {
    const result = shallow(ArticleWrap, {
      propsData: {
        title: '',
      },
    }).element;

    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(ArticleWrap, {
      propsData: {
        title: 'title',
      },
    }).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
