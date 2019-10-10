import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import SplitSectionQuote from '../SplitSectionQuote.vue';

expect.extend(toHaveNoViolations);

describe('SplitSectionQuote', () => {
  it('should match snapshot', () => {
    const result = shallow(SplitSectionQuote).element;
    expect(result).toMatchSnapshot();
  });
});
