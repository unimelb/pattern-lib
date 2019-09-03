import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import StyledSelect from '../StyledSelect.vue';

expect.extend(toHaveNoViolations);

describe('StyledSelect', () => {
  it('should match snapshot', () => {
    const result = shallow(StyledSelect).element;
    expect(result).toMatchSnapshot();
  });
});
