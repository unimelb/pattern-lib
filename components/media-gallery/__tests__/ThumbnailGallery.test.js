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
    type: 'image',
  },
  {
    id: 2,
    src: 'test2',
    title: 'test2',
    description: 'test2',
    type: 'video',
  },
];

describe('ThumbnailGallery', () => {
  it('should match snapshot', () => {
    const result = shallow(ThumbnailGallery).element;
    expect(result).toMatchSnapshot();
  });

  it('should have default props and correct types images/callback/columns/displayCaption/overlay', () => {
    const wrapper = shallow(ThumbnailGallery);
    const {
      media,
      callback,
      columns,
      displayCaption,
      overlay,
    } = wrapper.vm.$options.props;

    expect(columns.type).toBe(String);
    expect(wrapper.props().columns).toBe('1');
    expect(media.type).toBe(Array);
    expect(callback.type).toBe(Function);
    expect(displayCaption.type).toBe(Boolean);
    expect(overlay.type).toBe(Boolean);
    expect(wrapper.props().media).toEqual([{}]);
  });

  it('should accept columns prop with correct type', () => {
    const columns = '3';
    const wrapper = shallow(ThumbnailGallery, {
      propsData: {
        columns,
      },
    });

    expect(typeof wrapper.props().columns).toBe('string');
    expect(wrapper.props().columns).toBe(columns);
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
    expect(wrapper.find('.thumbnails__description').exists()).toBe(true);
  });

  it('should have click event on thumb', () => {
    const callback = sinon.spy();
    const wrapper = mount(ThumbnailGallery, {
      propsData: {
        media: mediaMock,
        callback,
        overlay: true,
      },
    });
    wrapper.find('.thumbnails__item div').trigger('click');
    expect(callback.called).toBe(true);
  });
});
