import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import ToggleBlockMobile from '../ToggleBlockMobile.vue';

expect.extend(toHaveNoViolations);

describe('ToggleBlockMobile', () => {
  it('should match snapshot', () => {
    const result = shallow(ToggleBlockMobile).element;
    expect(result).toMatchSnapshot();
  });
});
