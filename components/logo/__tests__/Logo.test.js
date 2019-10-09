import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import Logo from '../Logo.vue';


expect.extend(toHaveNoViolations);

describe('Logo', () => {
  it('should match snapshot', () => {
    const result = shallow(Logo).element;
    expect(result).toMatchSnapshot();
  });

  it('should have default props and correct types size / no padding', () => {
    const wrapper = shallow(Logo);
    const {
      size,
      noPadding,
    } = wrapper.vm.$options.props;

    expect(size.type).toEqual(String);
    expect(wrapper.props().size).toBe('lg');

    expect(noPadding.type).toBe(Boolean);
    expect(wrapper.props().noPadding).toBe(false);
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

  it('should render large logo with no padding', () => {
    const size = 'lg';
    const noPadding = true;
    const wrapper = shallow(Logo, {
      propsData: {
        size,
        noPadding,
      },
    });

    expect(typeof wrapper.props().size).toBe('string');
    expect(typeof wrapper.props().noPadding).toBe('boolean');
    expect(wrapper.props().size).toBe(size);
    expect(wrapper.props().noPadding).toBe(noPadding);
    expect(wrapper.find('.logo__image--lg').attributes().class).toContain('logo--no-padding');
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(Logo).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
