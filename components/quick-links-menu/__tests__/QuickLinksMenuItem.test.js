import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import QuickLinksMenuItem from '../QuickLinksMenuItem.vue';

expect.extend(toHaveNoViolations);

describe('QuickLinksMenuItem', () => {
  it('should match snapshot', () => {
    const result = shallow(QuickLinksMenuItem).element;
    expect(result).toMatchSnapshot();
  });
});
