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

  it('should be alternate tab with yellow border', () => {
    const wrapper = shallow(Tabs, {
      propsData: {
        alt: '',
        color: 'yellow',
      },
    });

    expect(wrapper.find('.tabs--alt').exists()).toBe(true);
    expect(wrapper.find('.tabs__section--alt').exists()).toBe(true);
    expect(wrapper.find('.tabs__section--yellow').exists()).toBe(true);

    expect(wrapper.element).toMatchSnapshot();
  });
});
