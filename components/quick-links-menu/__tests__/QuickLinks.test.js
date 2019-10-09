import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import QuickLinks from '../QuickLinks.vue';

expect.extend(toHaveNoViolations);

describe('QuickLinks', () => {
  it('should match snapshot', () => {
    const result = shallow(QuickLinks).element;
    expect(result).toMatchSnapshot();
  });
});
