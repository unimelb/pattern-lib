import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import SidePanel from '../SidePanel.vue';

expect.extend(toHaveNoViolations);

describe('SidePanel', () => {
  it('should match snapshot', () => {
    const result = shallow(SidePanel).element;
    expect(result).toMatchSnapshot();
  });
});
