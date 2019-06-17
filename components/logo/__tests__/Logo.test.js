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

  it('should have default props and correct types size / negativeMargin', () => {
    const wrapper = shallow(Logo);
    const {
      size,
      negativeMargin,
    } = wrapper.vm.$options.props;

    expect(size.type).toEqual(String);
    expect(wrapper.props().size).toBe('lg');

    expect(negativeMargin.type).toBe(Boolean);
    expect(wrapper.props().negativeMargin).toBe(false);
  });

  it('should render default logo class', () => {
    const wrapper = shallow(Logo, {
      propsData: {

      },
    });

    expect(wrapper.find('img').element.className).toBe('logo__image logo__image--lg');
  });

  it('should render small logo', () => {
    const size = 'sm';
    const wrapper = shallow(Logo, {
      propsData: {
        size,
      },
    });

    expect(typeof wrapper.props().size).toBe('string');
    expect(wrapper.props().size).toBe(size);
    expect(wrapper.find('img').element.className).toContain('logo__image--sm');
  });

  it('should render medium logo', () => {
    const size = 'md';
    const wrapper = shallow(Logo, {
      propsData: {
        size,
      },
    });

    expect(typeof wrapper.props().size).toBe('string');
    expect(wrapper.props().size).toBe(size);
    expect(wrapper.find('img').element.className).toContain('logo__image--md');
  });

  it('should render large logo', () => {
    const size = 'lg';
    const wrapper = shallow(Logo, {
      propsData: {
        size,
      },
    });

    expect(typeof wrapper.props().size).toBe('string');
    expect(wrapper.props().size).toBe(size);
    expect(wrapper.find('img').element.className).toContain('logo__image--lg');
  });

  it('should render large logo with negative margin', () => {
    const size = 'lg';
    const negativeMargin = true;
    const wrapper = shallow(Logo, {
      propsData: {
        size,
        negativeMargin,
      },
    });

    expect(typeof wrapper.props().size).toBe('string');
    expect(typeof wrapper.props().negativeMargin).toBe('boolean');
    expect(wrapper.props().size).toBe(size);
    expect(wrapper.props().negativeMargin).toBe(negativeMargin);
    expect(wrapper.find('.logo__image--lg').attributes().class).toContain('logo--negative-margin');
  });
});
