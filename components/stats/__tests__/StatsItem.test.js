import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import StatsItem from '../StatsItem.vue';

expect.extend(toHaveNoViolations);

describe('StatsItem', () => {
  it('should match snapshot', () => {
    const result = shallow(StatsItem, {
      propsData: {
        number: '',
        meta: '',
        icon: '',
      },
    }).element;

    expect(result).toMatchSnapshot();
  });
});
