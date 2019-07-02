import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import Testimonials from '../Testimonials.vue';

expect.extend(toHaveNoViolations);

describe('Testimonials', () => {
  it('should match snapshot', () => {
    const result = shallow(Testimonials).element;
    expect(result).toMatchSnapshot();
  });
});
