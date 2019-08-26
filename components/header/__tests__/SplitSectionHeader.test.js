import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import SplitSectionHeader from '../SplitSectionHeader.vue';

expect.extend(toHaveNoViolations);

describe('SplitSectionHeader', () => {
  it('should match snapshot', () => {
    const result = shallow(SplitSectionHeader).element;
    expect(result).toMatchSnapshot();
  });
});
