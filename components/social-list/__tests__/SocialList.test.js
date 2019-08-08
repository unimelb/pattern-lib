import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import SocialListGeneric from '../SocialListGeneric.vue';

expect.extend(toHaveNoViolations);

describe('Social List Generic', () => {
  it('should match snapshot', () => {
    const result = shallow(SocialListGeneric).element;
    expect(result).toMatchSnapshot();
  });
});
