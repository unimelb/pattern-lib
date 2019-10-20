import {
  shallow,
} from 'vue-test-utils';
import { toHaveNoViolations } from 'jest-axe';
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

  // Accessibility test for this component is done in the parent (StatsGroup) as it depends on the <ul></ul> tag.
  it.skip('Component throws no accessibility violations', () => {
  });
});
