import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import ToggleGroup from '../ToggleGroup.vue';

expect.extend(toHaveNoViolations);

describe('ToggleGroup', () => {
  it('should match snapshot', () => {
    const result = shallow(ToggleGroup).element;
    expect(result).toMatchSnapshot();
  });
});
