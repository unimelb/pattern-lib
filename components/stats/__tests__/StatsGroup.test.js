import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import StatsGroup from '../StatsGroup.vue';

expect.extend(toHaveNoViolations);

describe('StatsGroup', () => {
  it('should match snapshot', () => {
    const result = shallow(StatsGroup).element;
    expect(result).toMatchSnapshot();
  });
});
