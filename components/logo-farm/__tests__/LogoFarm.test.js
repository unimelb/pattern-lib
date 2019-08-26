import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import LogoFarm from '../LogoFarm.vue';


expect.extend(toHaveNoViolations);

describe('LogoFarm', () => {
  it('should match snapshot', () => {
    const result = shallow(LogoFarm).element;
    expect(result).toMatchSnapshot();
  });
});
