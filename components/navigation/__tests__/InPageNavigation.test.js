import {
  shallow,
  mount,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import InPageNavigation from '../InPageNavigation.vue';

expect.extend(toHaveNoViolations);

describe('InPageNavigation', () => {
  it('should match snapshot', () => {
    const result = shallow(InPageNavigation, {
      propsData: {
        headingLevel: 'h2',
      },
    }).element;
    expect(result).toMatchSnapshot();
  });

  it('should have default props and correct types title/headingLevel/color', () => {
    const wrapper = shallow(InPageNavigation);
    const {
      title,
      headingLevel,
      color,
    } = wrapper.vm.$options.props;

    expect(title.type).toEqual(String);
    expect(wrapper.props().title).toBe('');

    expect(headingLevel.type).toEqual(String);
    expect(wrapper.props().href).toBe(undefined);

    expect(color.type).toEqual(String);
    expect(wrapper.props().color).toBe('');
  });

  it('should render title from prop with correct type', () => {
    const title = 'Test title';
    const wrapper = shallow(InPageNavigation, {
      propsData: {
        title,
      },
    });

    expect(typeof wrapper.props().title).toBe('string');
    expect(wrapper.props().title).toBe(title);
  });

  it('should render headingLevel from prop with correct type', () => {
    const headingLevel = 'h2';
    const wrapper = shallow(InPageNavigation, {
      propsData: {
        headingLevel,
      },
    });

    expect(typeof wrapper.props().headingLevel).toBe('string');
    expect(wrapper.props().headingLevel).toBe(headingLevel);
  });

  it('should render with correct color from prop', () => {
    const color = 'navy';
    const wrapper = shallow(InPageNavigation, {
      propsData: {
        color,
      },
    });

    expect(typeof wrapper.props().color).toBe('string');
    expect(wrapper.props().color).toBe(color);
  });

  it('should validate headingLevel', () => {
    const wrapper = shallow(InPageNavigation);
    const {
      headingLevel,
    } = wrapper.vm.$options.props;

    expect(headingLevel.validator && headingLevel.validator('test')).toBeFalsy();
  });

  it('should add fixed class to component on scroll', () => {
    const headingLevel = 'h2';
    const wrapper = mount(InPageNavigation, {
      propsData: {
        headingLevel,
      },
    });

    wrapper.setData({ isFixed: true });
    expect(wrapper.find('.in-page-navigation__collapsed').classes()).toContain('in-page-navigation__collapsed--fixed');
  });

  it('Component throws no accessibility violations', (done) => {
    const headingLevel = 'h2';
    const html = mount(InPageNavigation, {
      propsData: {
        headingLevel,
      },
    }).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
