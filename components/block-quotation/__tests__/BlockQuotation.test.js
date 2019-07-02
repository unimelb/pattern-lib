import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import BlockQuotation from '../BlockQuotation.vue';

expect.extend(toHaveNoViolations);

describe('BlockQuotation', () => {
  it('should match snapshot', () => {
    const result = shallow(BlockQuotation).element;
    expect(result).toMatchSnapshot();
  });
});
