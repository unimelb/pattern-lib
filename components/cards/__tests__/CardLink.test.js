import { shallow } from 'vue-test-utils';
import { toHaveNoViolations } from 'jest-axe';
import CardLink from '../CardLink.vue';

expect.extend(toHaveNoViolations);

describe('CardLink', () => {
  it('should match snapshot', () => {
    const result = shallow(CardLink).element;
    expect(result).toMatchSnapshot();
  });

  it('should have default props and correct types thumb/title/href/inverted/cols', () => {
    const wrapper = shallow(CardLink);
    const {
      thumb, title, href, inverted, cols,
    } = wrapper.vm.$options.props;

    expect(thumb.type).toEqual([String, Boolean]);
    expect(wrapper.props().thumb).toBe('https://via.placeholder.com/400x200');

    expect(title.type).toBe(String);
    expect(wrapper.props().title).toBe('Test title');

    expect(href.type).toBe(String);
    expect(wrapper.props().href).toBe('#');

    expect(inverted.type).toBe(Boolean);
    expect(wrapper.props().inverted).toBe(false);

    expect(cols.type).toBe(Number);
    expect(wrapper.props().cols).toBe(4);
  });

  it('should render thumb from prop with correct type', () => {
    const thumb = 'http://';
    const wrapper = shallow(CardLink, {
      propsData: {
        thumb,
      },
    });

    expect(typeof wrapper.props().thumb).toBe('string');
    expect(wrapper.props().thumb).toBe(thumb);
    expect(wrapper.find('.card__thumb').attributes().style).toBe('background-image: url(http://);');
  });

  it('should render title from prop with correct type', () => {
    const title = 'Test title';
    const wrapper = shallow(CardLink, {
      propsData: {
        title,
      },
    });

    expect(typeof wrapper.props().title).toBe('string');
    expect(wrapper.props().title).toBe(title);
    expect(wrapper.find('span').text()).toBe(title);
  });

  it('should render href from prop with correct type', () => {
    const href = '/';
    const wrapper = shallow(CardLink, {
      propsData: {
        href,
      },
    });

    expect(typeof wrapper.props().href).toBe('string');
    expect(wrapper.props().href).toBe(href);
    expect(wrapper.find('.card').attributes().href).toBe(href);
  });

  it('should accept cols prop with correct type', () => {
    const cols = 4;
    const wrapper = shallow(CardLink, {
      propsData: {
        cols,
      },
    });

    expect(typeof wrapper.props().cols).toBe('number');
    expect(wrapper.props().cols).toBe(cols);
  });

  it('should accept cols max = 4 and min = 1', () => {
    const wrapper = shallow(CardLink);
    const { cols } = wrapper.vm.$options.props;

    expect(cols.validator && cols.validator(0)).toBeFalsy();
    // eslint-disable-next-line no-magic-numbers
    expect(cols.validator && cols.validator(5)).toBeFalsy();
  });

  it('should add correct class to the header', () => {
    const wrapper = shallow(CardLink);
    const classes = wrapper.find('.card__header').classes();
    const { inverted } = wrapper.vm.$options.props;

    if (!inverted) {
      expect(classes).toContain('cl-white');
    }
    if (inverted) {
      expect(classes).toContain('cl-inverted');
    }
  });

  it('should add correct class to the title', () => {
    const wrapper = shallow(CardLink);
    const classes = wrapper.find('span').classes();
    const { inverted } = wrapper.vm.$options.props;

    if (!inverted) {
      expect(classes).toContain('title-inverted');
    }
  });
});
