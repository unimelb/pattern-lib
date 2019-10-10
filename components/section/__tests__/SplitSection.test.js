import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import SplitSection from '../SplitSection.vue';

expect.extend(toHaveNoViolations);

describe('SplitSection', () => {
  it('should match snapshot', () => {
    const result = shallow(SplitSection).element;
    expect(result).toMatchSnapshot();
  });
});
