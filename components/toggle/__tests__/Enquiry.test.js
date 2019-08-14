import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import Enquiry from '../Enquiry.vue';

expect.extend(toHaveNoViolations);

describe('Enquiry', () => {
  it('should match snapshot', () => {
    const result = shallow(Enquiry).element;
    expect(result).toMatchSnapshot();
  });
});
