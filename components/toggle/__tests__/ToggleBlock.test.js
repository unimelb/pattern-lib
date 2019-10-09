import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import ToggleBlock from '../ToggleBlock.vue';

expect.extend(toHaveNoViolations);

describe('ToggleBlock', () => {
  it.skip('should match snapshot', () => {
    const result = shallow(ToggleBlock).element;
    expect(result).toMatchSnapshot();
  });
});
