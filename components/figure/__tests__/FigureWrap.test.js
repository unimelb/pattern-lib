import { shallow, mount } from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import FigureWrap from '../FigureWrap.vue';

expect.extend(toHaveNoViolations);

describe('GenericCard', () => {
  it('should match snapshot', () => {
    const result = shallow(FigureWrap, {
      propsData: {
        src: '/',
      },
    }).element;
    expect(result).toMatchSnapshot();
  });

  it('should have default props and correct types caption/inset/left/right/large/medium/small/fill', () => {
    const wrapper = shallow(FigureWrap);
    const {
      caption, inset, left, right, large, medium, small, fill,
    } = wrapper.vm.$options.props;

    expect(caption.type).toEqual([Boolean, String]);
    expect(wrapper.props().caption).toBe('test caption');

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

    expect(fill.type).toBe(Boolean);
    expect(wrapper.props().fill).toBe(false);
  });

  it('should render figcaption if caption provided', () => {
    const wrapper = mount(FigureWrap, {
      propsData: {
        caption: 'test',
      },
    });
    expect(wrapper.find('figcaption').text('test')).toBe('test');
  });

  it('should not render figcaption if caption not provided', () => {
    const wrapper = mount(FigureWrap, {
      propsData: {
        caption: false,
      },
    });
    expect(wrapper.find('figcaption').exists()).toBe(false);
  });

  it('should render content in default slot', () => {
    const wrapper = shallow(FigureWrap, {
      slots: {
        default: '<p>Some text</p>',
      },
    });
    expect(wrapper.find('p').exists()).toBe(true);
  });

  it('should render inset class', () => {
    const wrapper = mount(FigureWrap, {
      propsData: {
        inset: true,
      },
    });
    expect(wrapper.classes().indexOf('figure--inset')).toBeGreaterThan(0);
  });

  it('should render left class', () => {
    const wrapper = mount(FigureWrap, {
      propsData: {
        left: true,
      },
    });
    expect(wrapper.classes().indexOf('figure--inset-left')).toBeGreaterThan(0);
  });

  it('should render right class', () => {
    const wrapper = mount(FigureWrap, {
      propsData: {
        right: true,
      },
    });
    expect(wrapper.classes().indexOf('figure--inset-right')).toBeGreaterThan(0);
  });

  it('should render large class', () => {
    const wrapper = mount(FigureWrap, {
      propsData: {
        large: true,
      },
    });
    expect(wrapper.classes().indexOf('figure--lge')).toBeGreaterThan(0);
  });

  it('should render medium class', () => {
    const wrapper = mount(FigureWrap, {
      propsData: {
        medium: true,
      },
    });
    expect(wrapper.classes().indexOf('figure--med')).toBeGreaterThan(0);
  });

  it('should render small class', () => {
    const wrapper = mount(FigureWrap, {
      propsData: {
        small: true,
      },
    });
    expect(wrapper.classes().indexOf('figure--sml')).toBeGreaterThan(0);
  });

  it('should render fill class', () => {
    const wrapper = mount(FigureWrap, {
      propsData: {
        fill: true,
      },
    });
    expect(wrapper.classes().indexOf('figure--fill')).toBeGreaterThan(0);
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(FigureWrap).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
