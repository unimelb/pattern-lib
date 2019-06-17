import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import Logo from '../Logo.vue';


expect.extend(toHaveNoViolations);

describe('Logo', () => {
  it('should match snapshot', () => {
    const result = shallow(Logo).element;
    expect(result).toMatchSnapshot();
  });

  it('should have default props and correct types small/medium/large/negativeMargin', () => {
    const wrapper = shallow(Logo);
    const {
      small,
      medium,
      large,
      negativeMargin,
    } = wrapper.vm.$options.props;

    expect(small.type).toEqual(Boolean);
    expect(wrapper.props().small).toBe(false);

    expect(medium.type).toBe(Boolean);
    expect(wrapper.props().medium).toBe(false);

    expect(large.type).toBe(Boolean);
    expect(wrapper.props().large).toBe(false);

    expect(negativeMargin.type).toBe(Boolean);
    expect(wrapper.props().negativeMargin).toBe(false);
  });

  it('should render default logo class', () => {
    const wrapper = shallow(Logo, {
      propsData: {

      },
    });

    expect(wrapper.find('img').element.className).toBe('logo__image logo__image--large');
  });

  it('should render small logo', () => {
    const small = true;
    const wrapper = shallow(Logo, {
      propsData: {
        small,
      },
    });

    expect(typeof wrapper.props().small).toBe('boolean');
    expect(wrapper.props().small).toBe(small);
    expect(wrapper.find('.logo__image').attributes().src).toContain('logov2.svg');
  });

  it('should render medium logo', () => {
    const medium = true;
    const wrapper = shallow(Logo, {
      propsData: {
        medium,
      },
    });

    expect(typeof wrapper.props().medium).toBe('boolean');
    expect(wrapper.props().medium).toBe(medium);
    expect(wrapper.find('.logo__image--medium').attributes().src).toContain('logov2.svg');
  });

  it('should render large logo', () => {
    const large = true;
    const wrapper = shallow(Logo, {
      propsData: {
        large,
      },
    });

    expect(typeof wrapper.props().large).toBe('boolean');
    expect(wrapper.props().large).toBe(large);
    expect(wrapper.find('.logo__image--large').attributes().src).toContain('logov2.svg');
  });

  it('should render large logo with negative margin', () => {
    const large = true;
    const negativeMargin = true;
    const wrapper = shallow(Logo, {
      propsData: {
        large,
        negativeMargin,
      },
    });

    expect(typeof wrapper.props().large).toBe('boolean');
    expect(typeof wrapper.props().negativeMargin).toBe('boolean');
    expect(wrapper.props().large).toBe(large);
    expect(wrapper.props().negativeMargin).toBe(negativeMargin);
    expect(wrapper.find('.logo__image--large').attributes().class).toContain('logo--negative-margin');
  });
});
