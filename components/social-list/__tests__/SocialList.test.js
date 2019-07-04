import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import SocialList from '../SocialList.vue';

expect.extend(toHaveNoViolations);

describe('SocialList', () => {
  it('should match snapshot', () => {
    const result = shallow(SocialList).element;
    expect(result).toMatchSnapshot();
  });
});
