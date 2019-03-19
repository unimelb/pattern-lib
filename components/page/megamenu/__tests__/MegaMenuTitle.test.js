import { shallow } from 'vue-test-utils';
import { toHaveNoViolations } from 'jest-axe';
import MegaMenuTitle from '../MegaMenuTitle.vue';

expect.extend(toHaveNoViolations);

describe('MegaMenuTitle', () => {
  it('should match snapshot', () => {
    const result = shallow(MegaMenuTitle).element;
    expect(result).toMatchSnapshot();
  });

  it('should have default props and correct types title/href/width', () => {
    const wrapper = shallow(MegaMenuTitle);
    const {
      title, href, width,
    } = wrapper.vm.$options.props;

    expect(title.type).toEqual([String, Boolean]);
    expect(wrapper.props().title).toBe(false);

    expect(href.type).toEqual([String]);
    expect(wrapper.props().href).toBe(undefined);

    expect(width.type).toEqual([String, Boolean]);
    expect(wrapper.props().width).toBe(false);
  });

  it('should render title from prop with correct type', () => {
    const title = 'Test name';
    const wrapper = shallow(MegaMenuTitle, {
      propsData: {
        title,
      },
    });

    expect(typeof wrapper.props().title).toBe('string');
    expect(wrapper.props().title).toBe(title);
    expect(wrapper.find('.page-title__text').text()).toBe(title);
  });

  it('should have title as link', () => {
    const wrapper = shallow(MegaMenuTitle);
    expect(wrapper.find('.page-title__text').element.tagName).toBe('A');
  });

  it('should render href from prop with correct type', () => {
    const href = '/';
    const wrapper = shallow(MegaMenuTitle, {
      propsData: {
        href,
      },
    });

    expect(typeof wrapper.props().href).toBe('string');
    expect(wrapper.props().href).toBe(href);
    expect(wrapper.find('.page-title__text').attributes().href).toBe(href);
  });

  it('should render with correct width from prop', () => {
    const width = '50px';
    const wrapper = shallow(MegaMenuTitle, {
      propsData: {
        width,
      },
    });

    expect(typeof wrapper.props().width).toBe('string');
    expect(wrapper.props().width).toBe(width);
    expect(wrapper.element.style.width).toBe(width);
  });

  it('should render with default width', () => {
    const defaultWidth = '50%';
    const wrapper = shallow(MegaMenuTitle);
    expect(wrapper.element.style.width).toBe(defaultWidth);
  });
});
