import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import AccordionProfile from '../AccordionProfile.vue';
import {
  IMAGE_PLACEHOLDER_SHORT,
} from '../../../../utils/placeholders';

expect.extend(toHaveNoViolations);

describe('AccordionProfile', () => {
  it('should match snapshot', () => {
    const result = shallow(AccordionProfile, {
      propsData: {
        title: 'mock title',
      },
    }).element;
    expect(result).toMatchSnapshot();
  });

  it('should have default props and correct types thumb/title/subTitle/video/bio', () => {
    const wrapper = shallow(AccordionProfile);
    const {
      thumb,
      title,
      subTitle,
      video,
      bio,
    } = wrapper.vm.$options.props;

    expect(thumb.type).toEqual(String);
    expect(wrapper.props().thumb).toBe(IMAGE_PLACEHOLDER_SHORT);

    expect(title.type).toBe(String);
    expect(wrapper.props().title).toBe('');

    expect(subTitle.type).toBe(String);
    expect(wrapper.props().subTitle).toBe('');

    expect(video.type).toBe(String);
    expect(wrapper.props().video).toBe('');

    expect(bio.type).toBe(String);
    expect(wrapper.props().bio).toBe('');
  });

  it('should render thumb from prop with correct type', () => {
    const thumb = 'http://';
    const wrapper = shallow(AccordionProfile, {
      propsData: {
        thumb: 'http://',
      },
    });

    expect(typeof wrapper.props().thumb).toBe('string');
    expect(wrapper.props().thumb).toBe(thumb);
    expect(wrapper.find('.accordion-profile__thumb').attributes().style).toBe('background-image: url(http://);');
  });

  it('should render title from prop with correct type', () => {
    const title = 'Test title';
    const wrapper = shallow(AccordionProfile, {
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
    const wrapper = shallow(AccordionProfile, {
      propsData: {
        subTitle: 'Test subTitle',
      },
    });

    expect(typeof wrapper.props().subTitle).toBe('string');
    expect(wrapper.props().subTitle).toBe(subTitle);
    expect(wrapper.find('.accordion-profile__sub-title').text()).toBe(subTitle);
  });

  it('should render bio prop with correct type', () => {
    const bio = 'Test bio';
    const wrapper = shallow(AccordionProfile, {
      propsData: {
        bio: 'Test bio',
      },
    });

    expect(typeof wrapper.props().bio).toBe('string');
    expect(wrapper.props().bio).toBe(bio);
    expect(wrapper.find('.accordion-profile__bio').text()).toBe(bio);
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(AccordionProfile, {
      propsData: {
        title: 'mock title',
      },
    }).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
