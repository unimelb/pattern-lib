import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import ArticleWrap from '../ArticleWrap.vue';

expect.extend(toHaveNoViolations);

describe('ArticleWrap', () => {
  it('should match snapshot', () => {
    const result = shallow(ArticleWrap).element;
    expect(result).toMatchSnapshot();
  });
});
