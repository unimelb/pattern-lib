import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import Tab from '../Tab.vue';

expect.extend(toHaveNoViolations);

describe('Tab', () => {
  it('should match snapshot', () => {
    const result = shallow(Tab).element;
    expect(result).toMatchSnapshot();
  });
});
