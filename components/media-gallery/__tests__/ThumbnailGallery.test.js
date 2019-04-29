import { shallow, mount } from 'vue-test-utils';
import { toHaveNoViolations } from 'jest-axe';
import sinon from 'sinon';
import ThumbnailGallery from '../ThumbnailGallery.vue';

expect.extend(toHaveNoViolations);

const mediaMock = [
  {
    id: 1,
    src: 'test',
    title: 'test1',
    description: 'test1',
    size: '1of1',
    type: 'image',
  },
  {
    id: 2,
    src: 'test2',
    title: 'test2',
    description: 'test2',
    size: '1of1',
    type: 'video',
  },
];

describe('ThumbnailGallery', () => {
  it('should match snapshot', () => {
    const result = shallow(ThumbnailGallery).element;
    expect(result).toMatchSnapshot();
  });

  it('should have default props and correct types images/callback', () => {
    const wrapper = shallow(ThumbnailGallery);
    const {
      media,
      callback,
      displayCaption,
    } = wrapper.vm.$options.props;

    expect(media.type).toBe(Array);
    expect(callback.type).toBe(Function);
    expect(displayCaption.type).toBe(Boolean);
    expect(wrapper.props().media).toEqual([{}]);
  });

  it('should render images from prop', () => {
    const wrapper = mount(ThumbnailGallery, {
      propsData: {
        media: mediaMock,
      },
    });
    expect(wrapper.props().media.length).toBe(2);
    expect(wrapper.find('img').attributes().src).toBe('test');
  });

  it('should render video from prop', () => {
    const wrapper = mount(ThumbnailGallery, {
      propsData: {
        media: mediaMock,
      },
    });
    expect(wrapper.props().media.length).toBe(2);
    expect(wrapper.find('.embed').exists()).toBe(true);
  });

  it('should render caption from prop', () => {
    const wrapper = mount(ThumbnailGallery, {
      propsData: {
        displayCaption: true,
      },
    });
    expect(wrapper.props().displayCaption).toBe(true);
    expect(wrapper.find('.ThumbnailGallery__description').exists()).toBe(true);
  });

  it('should have click event on thumb', () => {
    const callback = sinon.spy();
    const wrapper = mount(ThumbnailGallery, {
      propsData: {
        media: mediaMock,
        callback,
      },
    });
    wrapper.find('.ThumbnailGallery__figure--item').trigger('click');
    expect(callback.called).toBe(true);
  });
});
