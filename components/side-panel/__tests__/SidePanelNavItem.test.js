import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import SidePanelNavItem from '../SidePanelNavItem.vue';

expect.extend(toHaveNoViolations);

describe('SidePanelNavItem', () => {
  it('should match snapshot', () => {
    const result = shallow(SidePanelNavItem).element;
    expect(result).toMatchSnapshot();
  });
});
