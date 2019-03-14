import { shallow, mount } from 'vue-test-utils';
import { toHaveNoViolations } from 'jest-axe';
import VideoEmbed from '../VideoEmbed.vue';

expect.extend(toHaveNoViolations);

describe('GenericCard', () => {
  it('should match snapshot', () => {
    const result = shallow(VideoEmbed, {
      propsData: {
        src: '/',
      },
    }).element;
    expect(result).toMatchSnapshot();
  });

  it('should have default props and correct types src/ratio/inset/left/right/large/medium/small', () => {
    const wrapper = shallow(VideoEmbed);
    const {
      src, ratio, inset, left, right, large, medium, small,
    } = wrapper.vm.$options.props;

    expect(src.type).toBe(String);
    expect(wrapper.props().src).toBe('');

    expect(ratio.type).toBe(String);
    expect(wrapper.props().ratio).toBe('');

    expect(inset.type).toBe(Boolean);
    expect(wrapper.props().inset).toBe(false);

    expect(left.type).toBe(Boolean);
    expect(wrapper.props().left).toBe(false);

    expect(right.type).toBe(Boolean);
    expect(wrapper.props().right).toBe(false);

    expect(large.type).toBe(Boolean);
    expect(wrapper.props().large).toBe(false);

    expect(medium.type).toBe(Boolean);
    expect(wrapper.props().medium).toBe(false);

    expect(small.type).toBe(Boolean);
    expect(wrapper.props().small).toBe(false);
  });

  it('should accept only valid ration', () => {
    const wrapper = shallow(VideoEmbed);
    const { ratio } = wrapper.vm.$options.props;

    expect(ratio.validator && ratio.validator('')).toBe(true);
    expect(ratio.validator && ratio.validator(4)).toBeFalsy();
  });

  it('should render iframe tag', () => {
    const wrapper = shallow(VideoEmbed);
    expect(wrapper.find('iframe').exists()).toBe(true);
  });

  it('should render src in iframe from prop with correct type', () => {
    const src = '/';
    const wrapper = shallow(VideoEmbed, {
      propsData: {
        src,
      },
    });

    expect(typeof wrapper.props().src).toBe('string');
    expect(wrapper.props().src).toBe(src);
    expect(wrapper.find('iframe').attributes().src).toBe(src);
  });

  it('should render ratio class', () => {
    const wrapper = mount(VideoEmbed, {
      propsData: {
        ratio: '21_9',
      },
    });
    expect(wrapper.classes().indexOf('embed--21_9')).toBeGreaterThan(0);
  });

  it('should render inset class', () => {
    const wrapper = mount(VideoEmbed, {
      propsData: {
        inset: true,
      },
    });
    expect(wrapper.classes().indexOf('embed--inset')).toBeGreaterThan(0);
  });

  it('should render left class', () => {
    const wrapper = mount(VideoEmbed, {
      propsData: {
        left: true,
      },
    });
    expect(wrapper.classes().indexOf('embed--inset-left')).toBeGreaterThan(0);
  });

  it('should render right class', () => {
    const wrapper = mount(VideoEmbed, {
      propsData: {
        right: true,
      },
    });
    expect(wrapper.classes().indexOf('embed--inset-right')).toBeGreaterThan(0);
  });

  it('should render large class', () => {
    const wrapper = mount(VideoEmbed, {
      propsData: {
        large: true,
      },
    });
    expect(wrapper.classes().indexOf('embed--inset--lge')).toBeGreaterThan(0);
  });

  it('should render medium class', () => {
    const wrapper = mount(VideoEmbed, {
      propsData: {
        medium: true,
      },
    });
    expect(wrapper.classes().indexOf('embed--inset--med')).toBeGreaterThan(0);
  });

  it('should render small class', () => {
    const wrapper = mount(VideoEmbed, {
      propsData: {
        small: true,
      },
    });
    expect(wrapper.classes().indexOf('embed--inset--sml')).toBeGreaterThan(0);
  });

});
