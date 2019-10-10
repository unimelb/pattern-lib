import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import GenericCard from '../GenericCard.vue';

expect.extend(toHaveNoViolations);

describe('GenericCard', () => {
  it('should match snapshot', () => {
    const result = shallow(GenericCard).element;
    expect(result).toMatchSnapshot();
  });

  it('should have default props and correct types thumb/title/href/excerpt', () => {
    const wrapper = shallow(GenericCard);
    const {
      thumb,
      title,
      cols,
      href,
      excerpt,
    } = wrapper.vm.$options.props;

    expect(thumb.type).toBe(String);
    expect(wrapper.props().thumb).toBe('https://matrix-cms.unimelb.edu.au/__data/assets/image/0022/82903/pattern-library-staff-placeholder.png');

    expect(title.type).toBe(String);
    expect(wrapper.props().title).toBe('');

    expect(cols.type).toBe(Number);
    expect(wrapper.props().cols).toBe(3);

    expect(href.type).toBe(String);
    expect(wrapper.props().href).toBe('#');

    expect(excerpt.type).toBe(String);
    expect(wrapper.props().excerpt).toBe('');
  });

  it('should render title from prop with correct type', () => {
    const title = 'Test title';
    const wrapper = shallow(GenericCard, {
      propsData: {
        title,
      },
    });

    expect(typeof wrapper.props().title).toBe('string');
    expect(wrapper.props().title).toBe(title);
    expect(wrapper.find('h3').text()).toBe(title);
  });

  it('should render href from prop with correct type', () => {
    const href = '/';
    const wrapper = shallow(GenericCard, {
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
    const wrapper = shallow(GenericCard, {
      propsData: {
        thumb,
      },
    });

    expect(typeof wrapper.props().thumb).toBe('string');
    expect(wrapper.props().thumb).toBe(thumb);
    expect(wrapper.find('.card__thumb').attributes().style).toBe('background-image: url(http://);');
  });

  it('should render excerpt from prop with correct type', () => {
    const excerpt = 'Lorem ipsum';
    const wrapper = shallow(GenericCard, {
      propsData: {
        excerpt,
      },
    });

    expect(typeof wrapper.props().excerpt).toBe('string');
    expect(wrapper.props().excerpt).toBe(excerpt);
    expect(wrapper.find('.card__excerpt').text()).toBe(excerpt);
  });

  it('should accept cols prop with correct type', () => {
    const cols = 3;
    const wrapper = shallow(GenericCard, {
      propsData: {
        cols,
      },
    });

    expect(typeof wrapper.props().cols).toBe('number');
    expect(wrapper.props().cols).toBe(cols);
  });

  it('should accept cols max = 3 and min = 1', () => {
    const wrapper = shallow(GenericCard);
    const {
      cols,
    } = wrapper.vm.$options.props;

    expect(cols.validator && cols.validator(0)).toBeFalsy();
    expect(cols.validator && cols.validator(4)).toBeFalsy();
  });

  it('should have card image as link', () => {
    const wrapper = shallow(GenericCard);
    expect(wrapper.find('.card__thumb').element.tagName).toBe('A');
  });

  it('should have card title as link', () => {
    const wrapper = shallow(GenericCard);
    expect(wrapper.find('.card__title').element.tagName).toBe('A');
  });

  it('should have title container with 3 slots', () => {
    const wrapper = shallow(GenericCard, {
      slots: {
        'sub-title-1': '<div class="sub-1">Sub 1</div>',
        'sub-title-2': '<div class="sub-2">Sub 2</div>',
        'sub-title-3': '<div class="sub-3">Sub 3</div>',
        'sub-title-4': '<div class="sub-4">Sub 4</div>',
      },
    });
    const sub1 = wrapper.find('.sub-1');
    const sub2 = wrapper.find('.sub-2');
    const sub3 = wrapper.find('.sub-3');
    const sub4 = wrapper.find('.sub-4');
    expect(sub1.exists()).toBe(true);
    expect(sub2.exists()).toBe(true);
    expect(sub3.exists()).toBe(true);
    expect(sub4.exists()).toBe(false);
  });

  it('should hide title container if no slots', () => {
    const wrapper = shallow(GenericCard);
    expect(wrapper.vm.hasSubTitleSlots).toBe(false);
  });

  it('should have link container with links slot', () => {
    const wrapper = shallow(GenericCard, {
      slots: {
        links: '<a>link</a>',
      },
    });
    const link = wrapper.find('a');
    expect(link.exists()).toBe(true);
  });

  it('should render as full width when 1 col set', () => {
    const wrapper = shallow(GenericCard, {
      propsData: {
        cols: 1,
      },
    });
    expect(wrapper.classes()).toContain('card--generic--full-width');
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(GenericCard, {
      propsData: {
        title: 'mock title',
        href: 'www.unimelb.edu.au',
      },
    }).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
