import {
  shallow, mount,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import NavigationCollapsed from '../NavigationCollapsed.vue';

expect.extend(toHaveNoViolations);

describe('NavigationCollapsed', () => {
  it('should match snapshot', () => {
    const result = shallow(NavigationCollapsed).element;
    expect(result).toMatchSnapshot();
  });

  it('should have default props and correct types title/headingLevel/color', () => {
    const wrapper = shallow(NavigationCollapsed);
    const {
      headingLevel,
    } = wrapper.vm.$options.props;

    expect(headingLevel.type).toEqual(String);
    expect(wrapper.props().href).toBe(undefined);
  });

  it('should validate headingLevel', () => {
    const wrapper = shallow(NavigationCollapsed);
    const {
      headingLevel,
    } = wrapper.vm.$options.props;

    expect(headingLevel.validator && headingLevel.validator('test')).toBeFalsy();
  });

  it('should render headingLevel from prop with correct type', () => {
    const headingLevel = 'h2';
    const wrapper = shallow(NavigationCollapsed, {
      propsData: {
        headingLevel,
      },
    });

    expect(typeof wrapper.props().headingLevel).toBe('string');
    expect(wrapper.props().headingLevel).toBe(headingLevel);
  });

  it('should add fixed class to component on scroll', () => {
    const headingLevel = 'h2';
    const wrapper = mount(NavigationCollapsed, {
      propsData: {
        headingLevel,
      },
    });

    wrapper.setData({ fixed: true });
    expect(wrapper.classes()).toContain('navigation-container--fixed');
  });
});
