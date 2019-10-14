import { shallow, mount } from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import CardEvents from '../CardEvents.vue';

expect.extend(toHaveNoViolations);

describe('CardEvents', () => {
  it('should match snapshot', () => {
    const result = mount(CardEvents).element;
    expect(result).toMatchSnapshot();
  });

  it('should have default props and correct types thumb/title/href/excerpt', () => {
    const wrapper = shallow(CardEvents);
    const {
      thumb,
      title,
      href,
      excerpt,
    } = wrapper.vm.$options.props;

    expect(thumb.type).toBe(String);
    expect(wrapper.props().thumb).toBe('https://via.placeholder.com/400x200');

    expect(title.type).toBe(String);
    expect(wrapper.props().title).toBe('');

    expect(href.type).toBe(String);
    expect(wrapper.props().href).toBe('');

    expect(excerpt.type).toBe(String);
    expect(wrapper.props().excerpt).toBe('');
  });

  it('should render title from prop with correct type', () => {
    const title = 'Test title';
    const wrapper = mount(CardEvents, {
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
    const wrapper = mount(CardEvents, {
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
    const wrapper = mount(CardEvents, {
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
    const wrapper = mount(CardEvents, {
      propsData: {
        excerpt,
      },
    });

    expect(typeof wrapper.props().excerpt).toBe('string');
    expect(wrapper.props().excerpt).toBe(excerpt);
    expect(wrapper.find('.card__excerpt').text()).toBe(excerpt);
  });

  it('Component throws no accessibility violations', (done) => {
    const html = mount(CardEvents, {
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
