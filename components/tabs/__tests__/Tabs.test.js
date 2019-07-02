import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import Tabs from '../Tabs.vue';

expect.extend(toHaveNoViolations);

describe('Tabs', () => {
  it('should match snapshot', () => {
    const result = shallow(Tabs).element;
    expect(result).toMatchSnapshot();
  });
});
