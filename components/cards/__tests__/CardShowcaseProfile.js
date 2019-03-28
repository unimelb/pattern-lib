import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import CardShowcaseProfile from '../CardShowcaseProfile.vue';

expect.extend(toHaveNoViolations);

describe('CardShowcaseProfile', () => {
  it('should match snapshot', () => {
    const result = shallow(CardShowcaseProfile).element;
    expect(result).toMatchSnapshot();
  });

  it('should have default props and correct types thumb/title/subTitle/bio', () => {
    const wrapper = shallow(CardShowcaseProfile);
    const {
      thumb,
      title,
      subTitle,
      bio,
    } = wrapper.vm.$options.props;

    expect(thumb.type).toEqual(String);
    expect(wrapper.props().thumb).toBe('https://via.placeholder.com/800x630');

    expect(title.type).toBe(String);
    expect(wrapper.props().title).toBe('');

    expect(subTitle.type).toBe(String);
    expect(wrapper.props().subTitle).toBe('');

    expect(bio.type).toBe(String);
    expect(wrapper.props().bio).toBe('');
  });

  it('should render thumb from prop with correct type', () => {
    const thumb = 'http://';
    const wrapper = shallow(CardShowcaseProfile, {
      propsData: {
        thumb: 'http://',
      },
    });

    expect(typeof wrapper.props().thumb).toBe('string');
    expect(wrapper.props().thumb).toBe(thumb);
    expect(wrapper.find('img').html()).toContain(thumb);
  });

  it('should render title from prop with correct type', () => {
    const title = 'Test title';
    const wrapper = shallow(CardShowcaseProfile, {
      propsData: {
        title: 'Test title',
      },
    });

    expect(typeof wrapper.props().title).toBe('string');
    expect(wrapper.props().title).toBe(title);
    expect(wrapper.find('h6').text()).toBe(title);
  });

  it('should render subTitle from prop with correct type', () => {
    const subTitle = 'Test subTitle';
    const wrapper = shallow(CardShowcaseProfile, {
      propsData: {
        subTitle: 'Test subTitle',
      },
    });

    expect(typeof wrapper.props().subTitle).toBe('string');
    expect(wrapper.props().subTitle).toBe(subTitle);
    expect(wrapper.find('.card__sub-title').text()).toBe(subTitle);
  });

  it('should render bio prop with correct type', () => {
    const bio = 'Test bio';
    const wrapper = shallow(CardShowcaseProfile, {
      propsData: {
        bio: 'Test bio',
      },
    });

    expect(typeof wrapper.props().bio).toBe('string');
    expect(wrapper.props().bio).toBe(bio);
    expect(wrapper.find('.card__bio').text()).toBe(bio);
  });
});
