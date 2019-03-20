import { shallow } from 'vue-test-utils';
import { toHaveNoViolations } from 'jest-axe';
import FocusWrapper from '../FocusWrapper.vue';
import SvgIcon from '../../icons/SvgIcon.vue';

expect.extend(toHaveNoViolations);

const testComponent = {
  name: 'test-component',
  template: '<p class="test">test</p>',
};

describe('FocusWrapper', () => {
  it('should match snapshot', () => {
    const result = shallow(FocusWrapper).element;
    expect(result).toMatchSnapshot();
  });

  it('should render component inside', () => {
    const wrapper = shallow(FocusWrapper, {
      slots: {
        default: [testComponent],
      },
    });
    expect(wrapper.find('p').exists()).toBe(true);
  });

  it('should render any content inside', () => {
    const wrapper = shallow(FocusWrapper, {
      slots: {
        default: ['<p>test</p>'],
      },
    });
    expect(wrapper.find('p').exists()).toBe(true);
  });

  it('should have focus top and bottom item,', () => {
    const wrapper = shallow(FocusWrapper);
    expect(wrapper.find(SvgIcon).exists()).toBe(true);
  });

  it('should have default props color/semiOpaque/size/padding', () => {
    const wrapper = shallow(FocusWrapper);
    expect(wrapper.props().color).toBe('');
    expect(wrapper.props().semiOpaque).toBe(false);
    expect(wrapper.props().size).toBe('medium');
    expect(wrapper.vm.normalizeSize).toBe(72);
    expect(wrapper.props().padded).toBe(false);
    expect(wrapper.classes().indexOf('card-focus--padded')).toBe(-1);
  });

  it('should accept only correct color value', () => {
    const wrapper = shallow(FocusWrapper, {
      propsData: {
        color: 'black',
      },
    });
    const { color } = wrapper.vm.$options.props;
    expect(color.type).toBe(String);
    expect(color.validator && color.validator('black')).toBeFalsy();
  });

  it('should have opacity', () => {
    const wrapper = shallow(FocusWrapper, {
      propsData: {
        semiOpaque: true,
      },
    });

    expect(wrapper.props().semiOpaque).toBe(true);
  });

  it('should accept only correct size value', () => {
    const wrapper = shallow(FocusWrapper, {
      propsData: {
        size: 72,
      },
    });
    const { size } = wrapper.vm.$options.props;
    expect(size.type).toBe(String);
    expect(size.validator && size.validator(72)).toBeFalsy();
  });

  it('should render small size', () => {
    const wrapper = shallow(FocusWrapper, {
      propsData: {
        size: 'small',
      },
    });
    expect(wrapper.props().size).toBe('small');
    expect(wrapper.vm.normalizeSize).toBe(48);
  });

  it('should render medium size', () => {
    const wrapper = shallow(FocusWrapper, {
      propsData: {
        size: 'medium',
      },
    });
    expect(wrapper.props().size).toBe('medium');
    expect(wrapper.vm.normalizeSize).toBe(72);
  });

  it('should render large size', () => {
    const wrapper = shallow(FocusWrapper, {
      propsData: {
        size: 'large',
      },
    });
    expect(wrapper.props().size).toBe('large');
    expect(wrapper.vm.normalizeSize).toBe(96);
  });

  it('should render padded', () => {
    const wrapper = shallow(FocusWrapper, {
      propsData: {
        padded: true,
      },
    });

    expect(wrapper.props().padded).toBe(true);
    expect(wrapper.classes().indexOf('card-focus--padded')).toBeGreaterThan(-1);
  });
});
