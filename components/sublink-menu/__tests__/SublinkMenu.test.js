import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import SublinkMenu from '../SublinkMenu.vue';

expect.extend(toHaveNoViolations);

describe('SublinkMenu', () => {
  it('should match snapshot', () => {
    const result = shallow(SublinkMenu).element;
    expect(result).toMatchSnapshot();
  });
});
