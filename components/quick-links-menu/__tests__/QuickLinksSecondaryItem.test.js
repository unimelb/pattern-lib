import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import QuickLinksSecondaryItem from '../QuickLinksSecondaryItem.vue';

expect.extend(toHaveNoViolations);

describe('QuickLinksSecondaryItem', () => {
  it('should match snapshot', () => {
    const result = shallow(QuickLinksSecondaryItem).element;
    expect(result).toMatchSnapshot();
  });
});
