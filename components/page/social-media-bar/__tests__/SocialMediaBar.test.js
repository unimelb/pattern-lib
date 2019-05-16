import { shallow } from 'vue-test-utils';
import { toHaveNoViolations } from 'jest-axe';
import SocialMediaBar from '../SocialMediaBar.vue';

expect.extend(toHaveNoViolations);

describe('SocialMediaBar', () => {
  it('should match snapshot', () => {
    const result = shallow(SocialMediaBar).element;
    expect(result).toMatchSnapshot();
  });

  it('should have default props and correct types className / newsletterLink / blogLink / facebookLink / twitterLink / linkedinLink / instagramLink / vimeoLink', () => {
    const wrapper = shallow(SocialMediaBar);
    const {
      className, newsletterLink, blogLink, facebookLink, twitterLink, linkedinLink, instagramLink, vimeoLink,
    } = wrapper.vm.$options.props;

    expect(className.type).toBe(String);
    expect(wrapper.props().className).toBe('');

    expect(newsletterLink.type).toEqual([String, Boolean]);
    expect(wrapper.props().newsletterLink).toBe(false);

    expect(blogLink.type).toEqual([String, Boolean]);
    expect(wrapper.props().blogLink).toBe(false);

    expect(facebookLink.type).toEqual([String, Boolean]);
    expect(wrapper.props().facebookLink).toBe(false);

    expect(twitterLink.type).toEqual([String, Boolean]);
    expect(wrapper.props().twitterLink).toBe(false);

    expect(linkedinLink.type).toEqual([String, Boolean]);
    expect(wrapper.props().linkedinLink).toBe(false);

    expect(instagramLink.type).toEqual([String, Boolean]);
    expect(wrapper.props().instagramLink).toBe(false);

    expect(vimeoLink.type).toEqual([String, Boolean]);
    expect(wrapper.props().vimeoLink).toBe(false);
  });

  it('should render className from prop with correct type', () => {
    const className = 'test';
    const wrapper = shallow(SocialMediaBar, {
      propsData: {
        className,
      },
    });

    expect(typeof wrapper.props().className).toBe('string');
    expect(wrapper.props().className).toBe(className);
    expect(wrapper.classes()).toContain('test');
  });

  it('should render all links', () => {
    const newsletterLink = 1;
    const blogLink = 2;
    const facebookLink = 3;
    const twitterLink = 4;
    const linkedinLink = 5;
    const instagramLink = 6;
    const vimeoLink = 7;
    const wrapper = shallow(SocialMediaBar, {
      propsData: {
        newsletterLink, blogLink, facebookLink, twitterLink, linkedinLink, instagramLink, vimeoLink,
      },
    });
    const leftLinks = wrapper.findAll('.social-media-bar--link');
    leftLinks.wrappers.forEach((elem) => {
      expect(elem.exists()).toBe(true);
    });

    const rightLinks = wrapper.findAll('.social-media-bar--link');
    rightLinks.wrappers.forEach((elem) => {
      expect(elem.exists()).toBe(true);
    });
  });
});
