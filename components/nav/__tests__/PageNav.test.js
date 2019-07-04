import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import PageNav from '../PageNav.vue';

expect.extend(toHaveNoViolations);

describe('PageNav', () => {
  it('should match snapshot', () => {
    const result = shallow(PageNav).element;
    expect(result).toMatchSnapshot();
  });
});
