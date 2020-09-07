import {
  shallow,
  mount,
} from 'vue-test-utils';

import CampaignBanner from '../CampaignBanner.vue';
import ButtonIcon from '../../buttons/ButtonIcon.vue';

describe('CampaignBanner', () => {
  const requiredProps = {
    imgSources: {
      large: [
        { url: '/path/to/large', pixelRatio: 1 },
      ],
      medium: [
        { url: '/path/to/medium', pixelRatio: 1 },
      ],
    },
  };

  it('should match snapshot', () => {
    const result = shallow(CampaignBanner, {
      propsData: {
        ...requiredProps,
      },
    }).element;
    expect(result).toMatchSnapshot();
  });

  it('should match snapshot with button', () => {
    const result = shallow(CampaignBanner, {
      propsData: {
        ...requiredProps,
        showButton: true,
      },
    }).element;
    expect(result).toMatchSnapshot();
  });

  it('should render the text to the paragraph', () => {
    const text = 'dog';
    const wrapper = mount(CampaignBanner, {
      propsData: {
        ...requiredProps,
        text,
      },
    });
    expect(wrapper.find('.campaign-banner__text').text()).toEqual(text);
  });

  it('should not render ButtonIcon by default', () => {
    const wrapper = mount(CampaignBanner, {
      propsData: {
        ...requiredProps,
      },
    });
    expect(wrapper.find(ButtonIcon).exists()).toBe(false);
  });

  it('should render the button when showButton property is true', () => {
    const wrapper = mount(CampaignBanner, {
      propsData: {
        ...requiredProps,
        showButton: true,
      },
    });
    expect(wrapper.find(ButtonIcon).exists()).toBe(true);
  });

  it('should render a custom text to the button', () => {
    const text = 'ice latte';
    const wrapper = mount(CampaignBanner, {
      propsData: {
        ...requiredProps,
        showButton: true,
        buttonText: text,
      },
    });
    expect(wrapper.find(ButtonIcon).html()).toContain(text);
  });

  it('should set the href attribute for the button', () => {
    const text = 'http://ice-latte.tools';
    const wrapper = mount(CampaignBanner, {
      propsData: {
        ...requiredProps,
        showButton: true,
        href: text,
      },
    });
    const button = wrapper.find(ButtonIcon);
    expect(button.attributes().href).toEqual(text);
  });

  it('should fill the img tag alt attribute with backgroundAltText prop value', () => {
    const text = 'ice latte';
    const wrapper = mount(CampaignBanner, {
      propsData: {
        ...requiredProps,
        showButton: true,
        backgroundAltText: text,
      },
    });
    const imageWrapper = wrapper.find('.campaign-banner__image');
    expect(imageWrapper.attributes().alt).toEqual(text);
  });

  it('should render one "source" element when no small background was provided', () => {
    const wrapper = mount(CampaignBanner, {
      propsData: { ...requiredProps },
    });
    const sources = wrapper.findAll('source');
    expect(sources.exists()).toBe(true);
    expect(sources.length).toEqual(1);
  });

  it('should render two "source" elements with correct "srcset" attribute values', () => {
    const small = [
      { url: '/path/to/small', pixelRatio: 2 },
      { url: '/path/to/small_3x', pixelRatio: 3 },
    ];
    const srcProp = requiredProps.imgSources;
    const wrapper = mount(CampaignBanner, {
      propsData: {
        imgSources: {
          large: srcProp.large,
          medium: srcProp.medium,
          small,
        },
      },
    });
    const sources = wrapper.findAll('source');
    expect(sources.exists()).toBe(true);
    expect(sources.length).toEqual(2);
    expect(sources.at(0).attributes().srcset).toEqual('/path/to/small 2x, /path/to/small_3x 3x');
    expect(sources.at(1).attributes().srcset).toEqual('/path/to/medium 1x');
  });
});
