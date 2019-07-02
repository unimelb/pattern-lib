import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import StatsItem from '../StatsItem.vue';

expect.extend(toHaveNoViolations);

describe('StatsItem', () => {
  it('should match snapshot', () => {
    const result = shallow(StatsItem).element;
    expect(result).toMatchSnapshot();
  });
});
