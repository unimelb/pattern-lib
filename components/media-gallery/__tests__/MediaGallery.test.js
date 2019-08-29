import {
  shallow,
  mount,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import sinon from 'sinon';
import MediaGallery from '../MediaGallery.vue';

expect.extend(toHaveNoViolations);

const itemsMock = [{
  src: 'test',
  title: 'test1',
  description: 'test1',
  type: 'image',
  altText: 'alt text 1',
},
{
  src: 'test2',
  title: 'test2',
  description: 'test2',
  type: 'video',
  altText: 'alt text 2',
},
];

describe('MediaGallery Common', () => {
  it('should match snapshot', () => {
    const result = shallow(MediaGallery).element;
    expect(result).toMatchSnapshot();
  });

  it('should have default props and correct types items, useOverlay, columns, displayCaption', () => {
    const wrapper = shallow(MediaGallery);
    const {
      items, useOverlay, columns, displayCaption,
    } = wrapper.vm.$options.props;

    expect(columns.type).toBe(String);
    expect(wrapper.props().columns).toBe('4');
    expect(items.type).toBe(Array);
    expect(useOverlay.type).toBe(Boolean);
    expect(displayCaption.type).toBe(Boolean);
    expect(wrapper.props().items).toEqual([]);
  });

  it('should accept cols prop with correct type', () => {
    const columns = '3';
    const wrapper = shallow(MediaGallery, {
      propsData: {
        columns,
      },
    });

    expect(typeof wrapper.props().columns).toBe('string');
    expect(wrapper.props().columns).toBe(columns);
  });

  it('should render media image in slider from prop', () => {
    const wrapper = shallow(MediaGallery, {
      propsData: {
        items: itemsMock,
      },
    });
    expect(wrapper.props().items.length).toBe(2);
    expect(wrapper.find('img').attributes().src).toBe('test');
  });

  it('should render media video in slider from prop', () => {
    const wrapper = mount(MediaGallery, {
      propsData: {
        items: itemsMock,
      },
    });
    expect(wrapper.props().items.length).toBe(2);
    expect(wrapper.find('iframe').exists()).toBe(true);
  });

  it('should set active to first media as default', () => {
    const wrapper = mount(MediaGallery, {
      propsData: {
        items: itemsMock,
      },
    });
    expect(wrapper.vm.selectedIndex).toBe(0);
  });

  it('should have click event on arrows', () => {
    const move = sinon.stub();
    const wrapper = shallow(MediaGallery, {
      propsData: {
        items: itemsMock,
      },
    });

    wrapper.setMethods({
      move,
    });
    wrapper.find('.media-gallery__button').trigger('click');
    expect(move.called).toBe(true);
  });

  it('should have click event on thumb', () => {
    const open = sinon.stub();
    const wrapper = shallow(MediaGallery, {
      propsData: {
        items: itemsMock,
      },
    });

    wrapper.setMethods({
      open,
    });
    wrapper.find('.media-gallery__thumb-image').trigger('click');
    expect(open.called).toBe(true);
  });

  it('should change media on arrow click', () => {
    const wrapper = shallow(MediaGallery, {
      propsData: {
        items: itemsMock,
      },
    });

    wrapper.find('.media-gallery__button').trigger('click');
    expect(wrapper.vm.selectedIndex).toBe(1);
  });

  it('should have click event on arrows', () => {
    const move = sinon.stub();
    const wrapper = shallow(MediaGallery, {
      propsData: {
        items: itemsMock,
      },
    });

    wrapper.setMethods({
      move,
    });
    wrapper.find('.media-gallery__button').trigger('keydown.enter');
    expect(move.called).toBe(true);
  });

  it('should render current image title/description', () => {
    const wrapper = mount(MediaGallery, {
      propsData: {
        items: itemsMock,
      },
    });

    expect(wrapper.vm.selectedIndex).toBe(0);
    expect(wrapper.find('.media-gallery__title').text()).toBe('test1');
    expect(wrapper.find('.media-gallery__description').text()).toBe('test1');
    wrapper.find('.media-gallery__button').trigger('click');
    expect(wrapper.find('.media-gallery__title').text()).toBe('test2');
    expect(wrapper.find('.media-gallery__description').text()).toBe('test2');
  });
});

describe('MediaGallery InPage', () => {
  it('should render current media number', () => {
    const wrapper = mount(MediaGallery, {
      propsData: {
        items: itemsMock,
      },
    });
    Element.prototype.scrollIntoView = jest.fn();
    expect(wrapper.find('.media-gallery__count').text()).toBe('1 / 2');
    wrapper.find('.media-gallery__button').trigger('click');
    expect(wrapper.find('.media-gallery__count').text()).toBe('2 / 2');
  });

  it('should change image on thumb click', () => {
    const wrapper = shallow(MediaGallery, {
      propsData: {
        items: itemsMock,
      },
    });
    wrapper.findAll('.media-gallery__thumb').at(1).trigger('click');
    expect(wrapper.findAll('.media-gallery__thumb').at(1).classes()).toContain('active');
    expect(wrapper.vm.selectedIndex).toBe(1);
  });

  it('should render embed if image type', () => {
    const wrapper = mount(MediaGallery, {
      propsData: {
        items: itemsMock,
      },
    });
    wrapper.find('.media-gallery__button').trigger('click');
    wrapper.find('.media-gallery__button').trigger('click');
    expect(wrapper.find('.media-gallery__thumb-image').exists()).toBe(true);
  });

  it('should render embed if video type', () => {
    const wrapper = mount(MediaGallery, {
      propsData: {
        items: itemsMock,
      },
    });
    wrapper.find('.media-gallery__button').trigger('click');
    expect(wrapper.find('.embed').exists()).toBe(true);
  });
});

describe('MediaGallery overlay', () => {
  it('should have overlay classes', () => {
    const wrapper = mount(MediaGallery, {
      propsData: {
        items: itemsMock,
        useOverlay: true,
      },
    });

    expect(wrapper.find('.media-gallery').classes()).toContain('media-gallery--hide');
    expect(wrapper.find('.media-gallery__count').exists()).toBe(true);
    expect(wrapper.find('.media-gallery__close').exists()).toBe(true);
    expect(wrapper.find('.media-gallery__slider').classes()).toContain('media-gallery__slider--overlay');
    expect(wrapper.find('.media-gallery__container--overlay').exists()).toBe(true);
  });

  it('should render current media number', () => {
    const wrapper = shallow(MediaGallery, {
      propsData: {
        items: itemsMock,
        useOverlay: true,
      },
    });

    expect(wrapper.find('.media-gallery__count').text()).toBe('1 / 2');
    wrapper.find('.media-gallery__button').trigger('click');
    expect(wrapper.find('.media-gallery__count').text()).toBe('2 / 2');
  });

  it('should have thumbnails component', () => {
    const wrapper = mount(MediaGallery, {
      propsData: {
        items: itemsMock,
        useOverlay: true,
      },
    });

    expect(wrapper.find('.thumbnails').exists()).toBe(true);
  });

  it('should have img thumbnails open callback', () => {
    const openThumb = sinon.stub();
    const wrapper = mount(MediaGallery, {
      propsData: {
        items: itemsMock,
        useOverlay: true,
      },
    });

    wrapper.setMethods({
      openThumb,
    });
    wrapper.find('.thumbnails__item div').trigger('click');
    expect(openThumb.called).toBe(true);
  });

  it('should open slider pop over on thumb click', () => {
    const wrapper = mount(MediaGallery, {
      propsData: {
        items: itemsMock,
        useOverlay: true,
      },
    });

    wrapper.find('.thumbnails__item div').trigger('click');
    expect(wrapper.vm.openState).toBe(true);
    expect(wrapper.find('.media-gallery').classes()).toContain('media-gallery--show');
  });
});
