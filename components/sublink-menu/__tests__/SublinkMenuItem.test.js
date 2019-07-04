import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import SublinkMenuItem from '../SublinkMenuItem.vue';

expect.extend(toHaveNoViolations);

describe('SublinkMenuItem', () => {
  it('should match snapshot', () => {
    const result = shallow(SublinkMenuItem).element;
    expect(result).toMatchSnapshot();
  });
});
