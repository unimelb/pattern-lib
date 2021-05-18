import {
  shallow,
  mount,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import CampaignBannerAlt from '../CampaignBannerAlt.vue';
import ButtonIcon from '../../buttons/ButtonIcon.vue';

expect.extend(toHaveNoViolations);

describe('CampaignBannerAlt', () => {
  const requiredProps = {
    title: 'Register now for Open Days 2021',
    img: {
      src: '/path/to/medium',
      alt: 'Woman typing on laptop',
      sizes: [
        {
          maxWidth: 599,
          srcset: '/path/to/large',
        },
      ],
    },
  };

  it('should match snapshot', () => {
    const result = shallow(CampaignBannerAlt, {
      propsData: {
        ...requiredProps,
      },
    }).element;
    expect(result).toMatchSnapshot();
  });

  it('should match snapshot with button', () => {
    const result = shallow(CampaignBannerAlt, {
      propsData: {
        ...requiredProps,
        cta: {
          text: 'Register now',
          href: '#',
        },
      },
    }).element;
    expect(result).toMatchSnapshot();
  });

  it('should render the text to the h1', () => {
    const text = 'Register now for Open Days 2021';
    const wrapper = mount(CampaignBannerAlt, {
      propsData: {
        ...requiredProps,
        cta: {
          text,
          href: '#',
        },
      },
    });
    expect(wrapper.find('.campaign-banner-alt__title').text()).toEqual(text);
  });

  it('should not render ButtonIcon by default', () => {
    const wrapper = mount(CampaignBannerAlt, {
      propsData: {
        ...requiredProps,
      },
    });
    expect(wrapper.find(ButtonIcon).exists()).toBe(false);
  });

  it('should render the button when CTA property is present', () => {
    const wrapper = mount(CampaignBannerAlt, {
      propsData: {
        ...requiredProps,
        cta: {
          text: 'Register now',
          href: '#',
        },
      },
    });
    expect(wrapper.find(ButtonIcon).exists()).toBe(true);
  });

  it('should render a custom text to the button', () => {
    const text = 'Register now';
    const wrapper = mount(CampaignBannerAlt, {
      propsData: {
        ...requiredProps,
        cta: {
          text,
          href: '#',
        },
      },
    });
    expect(wrapper.find(ButtonIcon).html()).toContain(text);
  });

  it('should set the href attribute for the button', () => {
    const href = 'https://www.unimelb.edu.au/';
    const wrapper = mount(CampaignBannerAlt, {
      propsData: {
        ...requiredProps,
        cta: {
          text: 'Register now',
          href,
        },
      },
    });
    const button = wrapper.find(ButtonIcon);
    expect(button.attributes().href).toEqual(href);
  });

  it('should fill the img tag alt attribute with img.alt prop value', () => {
    const text = 'Woman typing on laptop';
    const wrapper = mount(CampaignBannerAlt, {
      propsData: {
        ...requiredProps,
      },
    });
    const imageWrapper = wrapper.find('.campaign-banner-alt__img img');
    expect(imageWrapper.attributes().alt).toEqual(text);
  });

  it('My Component throws no accessibility violations', (done) => {
    const html = mount(CampaignBannerAlt, {
      propsData: {
        ...requiredProps,
      },
    }).html();

    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
