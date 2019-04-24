import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import CardStaffList from '../CardStaffList.vue';

expect.extend(toHaveNoViolations);

describe('CardStaffList', () => {
  it('should match snapshot', () => {
    const result = shallow(CardStaffList).element;
    expect(result).toMatchSnapshot();
  });

  it('should have default props and correct types thumb/name/href/position/phone/email/cols/excerpt', () => {
    const wrapper = shallow(CardStaffList);
    const {
      thumb,
      name,
      cols,
      href,
      position,
      email,
      phone,
      excerpt,
    } = wrapper.vm.$options.props;

    expect(thumb.type).toBe(String);
    expect(wrapper.props().thumb).toBe('https://matrix-cms.unimelb.edu.au/__data/assets/image/0022/82903/pattern-library-staff-placeholder.png');

    expect(name.type).toBe(String);
    expect(wrapper.props().name).toBe('Test name');

    expect(position.type).toBe(String);
    expect(wrapper.props().position).toBe('Test position');

    expect(cols.type).toBe(Number);
    expect(wrapper.props().cols).toBe(0);

    expect(href.type).toBe(String);
    expect(wrapper.props().href).toBe('#');

    expect(email.type).toEqual([String, Boolean]);
    expect(wrapper.props().email).toBe(false);

    expect(phone.type).toEqual([String, Boolean]);
    expect(wrapper.props().phone).toBe(false);

    expect(excerpt.type).toBe(String);
    expect(wrapper.props().excerpt).toBe('');
  });

  it('should render name from prop with correct type', () => {
    const name = 'Test name';
    const wrapper = shallow(CardStaffList, {
      propsData: {
        name,
      },
    });

    expect(typeof wrapper.props().name).toBe('string');
    expect(wrapper.props().name).toBe(name);
    expect(wrapper.find('.card__name').text()).toBe(name);
  });

  it('should render position from prop with correct type', () => {
    const position = 'Test position';
    const wrapper = shallow(CardStaffList, {
      propsData: {
        position,
      },
    });

    expect(typeof wrapper.props().position).toBe('string');
    expect(wrapper.props().position).toBe(position);
    expect(wrapper.find('h3').text()).toBe(position);
  });

  it('should render href from prop with correct type', () => {
    const href = '/';
    const wrapper = shallow(CardStaffList, {
      propsData: {
        href,
      },
    });

    expect(typeof wrapper.props().href).toBe('string');
    expect(wrapper.props().href).toBe(href);
    expect(wrapper.find('.card__thumb').attributes().href).toBe(href);
  });

  it('should render thumb from prop with correct type', () => {
    const thumb = 'http://';
    const wrapper = shallow(CardStaffList, {
      propsData: {
        thumb,
      },
    });

    expect(typeof wrapper.props().thumb).toBe('string');
    expect(wrapper.props().thumb).toBe(thumb);
    expect(wrapper.find('.card__thumb').attributes().style).toBe('background-image: url(http://);');
  });

  it('should accept cols prop with correct type', () => {
    const cols = 3;
    const wrapper = shallow(CardStaffList, {
      propsData: {
        cols,
      },
    });

    expect(typeof wrapper.props().cols).toBe('number');
    expect(wrapper.props().cols).toBe(cols);
  });

  it('should render excerpt from prop with correct type', () => {
    const excerpt = 'Lorem ipsum';
    const wrapper = shallow(CardStaffList, {
      propsData: {
        excerpt,
      },
    });

    expect(typeof wrapper.props().excerpt).toBe('string');
    expect(wrapper.props().excerpt).toBe(excerpt);
    expect(wrapper.find('.card__excerpt').text()).toBe(excerpt);
  });

  it('should have card image as link', () => {
    const wrapper = shallow(CardStaffList);
    expect(wrapper.find('.card__thumb').element.tagName).toBe('A');
  });

  it('should have card position as link', () => {
    const wrapper = shallow(CardStaffList);
    expect(wrapper.find('.card__header').element.tagName).toBe('A');
  });

  it('should have card position and name be a link', () => {
    const wrapper = shallow(CardStaffList);
    expect(wrapper.find('.card__inner').find('a').element.tagName).toBe('A');
  });

  it('should hide footer container if no cols => 4', () => {
    const wrapper = shallow(CardStaffList, {
      propsData: {
        cols: 4,
      },
    });
    expect(wrapper.find('.card__footer').exists()).toBe(false);
  });

  it('should hide phone if no prop', () => {
    const wrapper = shallow(CardStaffList);
    expect(wrapper.find('.card__phone').exists()).toBe(false);
  });

  it('should hide email if no prop', () => {
    const wrapper = shallow(CardStaffList);
    expect(wrapper.find('.card__email').exists()).toBe(false);
  });
});
