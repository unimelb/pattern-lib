import {
  mount,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import CardFeaturesPanel from '../CardFeaturesPanel.vue';

expect.extend(toHaveNoViolations);

describe('CardFeaturesPanel', () => {
  it('should match snapshot', () => {
    const result = mount(CardFeaturesPanel, {
      propsData: {
        title: 'mock title',
        ariaLabel: 'test aria label',
      },
    }).element;
    expect(result).toMatchSnapshot();
  });

  it('should have default props and correct types thumb/title/text/href', () => {
    const wrapper = mount(CardFeaturesPanel);
    const {
      thumb,
      title,
      text,
      href,
    } = wrapper.vm.$options.props;

    expect(thumb.type).toBe(String);
    expect(wrapper.props().thumb).toBe('https://matrix-cms.unimelb.edu.au/__data/assets/image/0022/82903/pattern-library-staff-placeholder.png');

    expect(title.type).toBe(String);
    expect(wrapper.props().title).toBe('');

    expect(text.type).toBe(String);
    expect(wrapper.props().text).toBe('');

    expect(href.type).toBe(String);
    expect(wrapper.props().href).toBe('');
  });

  it('should render title from prop with correct type', () => {
    const title = 'Test title';
    const wrapper = mount(CardFeaturesPanel, {
      propsData: {
        title,
      },
    });

    expect(typeof wrapper.props().title).toBe('string');
    expect(wrapper.props().title).toBe(title);
    expect(wrapper.find('h3').text()).toBe(title);
  });

  it('should render text from prop with correct type', () => {
    const text = 'Test text';
    const wrapper = mount(CardFeaturesPanel, {
      propsData: {
        text,
      },
    });

    expect(typeof wrapper.props().text).toBe('string');
    expect(wrapper.props().text).toBe(text);
    expect(wrapper.find('p').text()).toBe(text);
  });

  it('should render href from prop with correct type', () => {
    const href = '/';
    const wrapper = mount(CardFeaturesPanel, {
      propsData: {
        href,
      },
    });

    expect(typeof wrapper.props().href).toBe('string');
    expect(wrapper.props().href).toBe(href);
    expect(wrapper.find('.btn--fullwidth').attributes().href).toBe(href);
  });

  it('should render thumb from prop with correct type', () => {
    const thumb = 'http://';
    const wrapper = mount(CardFeaturesPanel, {
      propsData: {
        thumb,
      },
    });

    expect(typeof wrapper.props().thumb).toBe('string');
    expect(wrapper.props().thumb).toBe(thumb);
    expect(wrapper.find('.card__thumb-img').attributes().style).toBe('background-image: url(http://);');
  });

  it('Component throws no accessibility violations', (done) => {
    const html = mount(CardFeaturesPanel, {
      propsData: {
        title: 'mock title',
        ariaLabel: 'test aria label',
      },
    }).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
