import { shallow } from 'vue-test-utils';
import { toHaveNoViolations } from 'jest-axe';
import CardStaffList from '../CardStaffList.vue';

expect.extend(toHaveNoViolations);

describe('CardStaffList', () => {
  it('should match snapshot', () => {
    const result = shallow(CardStaffList).element;
    expect(result).toMatchSnapshot();
  });

  it('should have default props and correct types thumb/name/href/position/phone/email/cols', () => {
    const wrapper = shallow(CardStaffList);
    const {
      thumb, name, cols, href, position, email, phone,
    } = wrapper.vm.$options.props;

    expect(thumb.type).toBe(String);
    expect(wrapper.props().thumb).toBe('https://via.placeholder.com/400x200');

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
    expect(wrapper.find('.card__meta').text()).toBe(name);
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
  //
  // it('should render thumb from prop with correct type', () => {
  //   const thumb = 'http://';
  //   const wrapper = shallow(GenericCard, {
  //     propsData: {
  //       thumb,
  //     },
  //   });
  //
  //   expect(typeof wrapper.props().thumb).toBe('string');
  //   expect(wrapper.props().thumb).toBe(thumb);
  //   expect(wrapper.find('.card__thumb').attributes().style).toBe('background-image: url(http://);');
  // });
  //
  // it('should render excerpt from prop with correct type', () => {
  //   const excerpt = 'Lorem ipsum';
  //   const wrapper = shallow(GenericCard, {
  //     propsData: {
  //       excerpt,
  //     },
  //   });
  //
  //   expect(typeof wrapper.props().excerpt).toBe('string');
  //   expect(wrapper.props().excerpt).toBe(excerpt);
  //   expect(wrapper.find('.card__excerpt').text()).toBe(excerpt);
  // });
  //
  // it('should accept cols prop with correct type', () => {
  //   const cols = 3;
  //   const wrapper = shallow(GenericCard, {
  //     propsData: {
  //       cols,
  //     },
  //   });
  //
  //   expect(typeof wrapper.props().cols).toBe('number');
  //   expect(wrapper.props().cols).toBe(cols);
  // });
  //
  // it('should accept cols max = 3 and min = 1', () => {
  //   const wrapper = shallow(GenericCard);
  //   const { cols } = wrapper.vm.$options.props;
  //
  //   expect(cols.validator && cols.validator(0)).toBeFalsy();
  //   expect(cols.validator && cols.validator(4)).toBeFalsy();
  // });
  //
  // it('should have card image as link', () => {
  //   const wrapper = shallow(GenericCard);
  //   expect(wrapper.find('.card__thumb').element.tagName).toBe('A');
  // });
  //
  // it('should have card title as link', () => {
  //   const wrapper = shallow(GenericCard);
  //   expect(wrapper.find('.card__title').element.tagName).toBe('A');
  // });
  //
  // it('should have title container with 3 slots', () => {
  //   const wrapper = shallow(GenericCard, {
  //     slots: {
  //       'sub-title-1': '<div class="sub-1">Sub 1</div>',
  //       'sub-title-2': '<div class="sub-2">Sub 2</div>',
  //       'sub-title-3': '<div class="sub-3">Sub 3</div>',
  //       'sub-title-4': '<div class="sub-4">Sub 4</div>',
  //     },
  //   });
  //   const sub1 = wrapper.find('.sub-1');
  //   const sub2 = wrapper.find('.sub-2');
  //   const sub3 = wrapper.find('.sub-3');
  //   const sub4 = wrapper.find('.sub-4');
  //   expect(sub1.exists()).toBe(true);
  //   expect(sub2.exists()).toBe(true);
  //   expect(sub3.exists()).toBe(true);
  //   expect(sub4.exists()).toBe(false);
  // });
  //
  // it('should hide title container if no slots', () => {
  //   const wrapper = shallow(GenericCard);
  //   expect(wrapper.vm.hasSubTitleSlots).toBe(false);
  // });
  //
  // it('should have link container with links slot', () => {
  //   const wrapper = shallow(GenericCard, {
  //     slots: {
  //       links: '<a>link</a>',
  //     },
  //   });
  //   const link = wrapper.find('a');
  //   expect(link.exists()).toBe(true);
  // });
});
