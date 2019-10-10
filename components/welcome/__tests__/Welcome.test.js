import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import Welcome from '../Welcome.vue';

expect.extend(toHaveNoViolations);

describe('Welcome', () => {
  it('should match snapshot', () => {
    const result = shallow(Welcome).element;
    expect(result).toMatchSnapshot();
  });
});
