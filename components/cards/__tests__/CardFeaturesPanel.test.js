import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import CardFeaturesPanel from '../CardFeaturesPanel.vue';

expect.extend(toHaveNoViolations);

describe('CardFeaturesPanel', () => {
  it('should match snapshot', () => {
    const result = shallow(CardFeaturesPanel).element;
    expect(result).toMatchSnapshot();
  });

  it('should have default props and correct types thumb/title/text/href', () => {
    const wrapper = shallow(CardFeaturesPanel);
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
    const wrapper = shallow(CardFeaturesPanel, {
      propsData: {
        title,
      },
    });

    expect(typeof wrapper.props().title).toBe('string');
    expect(wrapper.props().title).toBe(title);
    expect(wrapper.find('h5').text()).toBe(title);
  });

  it('should render text from prop with correct type', () => {
    const text = 'Test text';
    const wrapper = shallow(CardFeaturesPanel, {
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
    const wrapper = shallow(CardFeaturesPanel, {
      propsData: {
        href,
      },
    });

    expect(typeof wrapper.props().href).toBe('string');
    expect(wrapper.props().href).toBe(href);
    expect(wrapper.find('.btn--wide').attributes().href).toBe(href);
  });

  it('should render thumb from prop with correct type', () => {
    const thumb = 'http://';
    const wrapper = shallow(CardFeaturesPanel, {
      propsData: {
        thumb,
      },
    });

    expect(typeof wrapper.props().thumb).toBe('string');
    expect(wrapper.props().thumb).toBe(thumb);
    expect(wrapper.find('.card__thumb-img').attributes().style).toBe('background-image: url(http://);');
  });
});
