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

const mediaMock = [{
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

describe('MediaGallery Common', () => {
  it('should match snapshot', () => {
    const result = shallow(MediaGallery).element;
    expect(result).toMatchSnapshot();
  });

  it('should have default props and correct types media', () => {
    const wrapper = shallow(MediaGallery);
    const {
      media, inPage, popOver, displayCaption,
    } = wrapper.vm.$options.props;

    expect(media.type).toBe(Array);
    expect(inPage.type).toBe(Boolean);
    expect(popOver.type).toBe(Boolean);
    expect(displayCaption.type).toBe(Boolean);
    expect(wrapper.props().media).toEqual([]);
  });

  it('should render media image in slider from prop', () => {
    const wrapper = shallow(MediaGallery, {
      propsData: {
        media: mediaMock,
      },
    });
    expect(wrapper.props().media.length).toBe(2);
    expect(wrapper.find('img').attributes().src).toBe('test');
  });

  it('should render media video in slider from prop', () => {
    const wrapper = mount(MediaGallery, {
      propsData: {
        media: mediaMock,
      },
    });
    expect(wrapper.props().media.length).toBe(2);
    expect(wrapper.find('iframe').exists()).toBe(true);
  });

  it('should set active to first media as default', () => {
    const wrapper = mount(MediaGallery, {
      propsData: {
        media: mediaMock,
      },
    });
    expect(wrapper.vm.selectedIndex).toBe(0);
    expect(wrapper.vm.selectedItem.id).toBe(1);
    expect(wrapper.find('.media-gallery__container img').exists()).toBe(true);
  });

  it('should have click event on arrows', () => {
    const move = sinon.stub();
    const wrapper = shallow(MediaGallery, {
      propsData: {
        media: mediaMock,
      },
    });

    wrapper.setMethods({
      move,
    });
    wrapper.find('.arrow-wrapper').trigger('click');
    expect(move.called).toBe(true);
  });

  it('should have click event on thumb', () => {
    const open = sinon.stub();
    const wrapper = shallow(MediaGallery, {
      propsData: {
        media: mediaMock,
      },
    });

    wrapper.setMethods({
      open,
    });
    wrapper.find('.thumb').trigger('click');
    expect(open.called).toBe(true);
  });

  it('should change media on arrow click', () => {
    const wrapper = shallow(MediaGallery, {
      propsData: {
        media: mediaMock,
      },
    });

    wrapper.find('.arrow-wrapper').trigger('click');
    expect(wrapper.vm.selectedIndex).toBe(1);
    expect(wrapper.vm.selectedItem.id).toBe(2);
  });

  it('should have click event on arrows', () => {
    const move = sinon.stub();
    const wrapper = shallow(MediaGallery, {
      propsData: {
        media: mediaMock,
      },
    });

    wrapper.setMethods({
      move,
    });
    wrapper.find('.arrow-wrapper').trigger('keydown.enter');
    expect(move.called).toBe(true);
  });

  it('should render current image title/description', () => {
    const wrapper = mount(MediaGallery, {
      propsData: {
        media: mediaMock,
      },
    });

    expect(wrapper.vm.selectedIndex).toBe(0);
    expect(wrapper.vm.selectedItem.id).toBe(1);
    expect(wrapper.find('.media-gallery__title').text()).toBe('test1');
    expect(wrapper.find('.media-gallery__description').text()).toBe('test1');
    wrapper.find('.arrow-wrapper').trigger('click');
    expect(wrapper.find('.media-gallery__title').text()).toBe('test2');
    expect(wrapper.find('.media-gallery__description').text()).toBe('test2');
  });

  // it('should render current media number', () => {
  //   const wrapper = shallow(MediaGallery, {
  //     propsData: {
  //       media: mediaMock,
  //     },
  //   });
  //
  //   expect(wrapper.find('.media-gallery__media-count').text()).toBe('1 / 2');
  //   wrapper.find('.arrow-wrapper').trigger('click');
  //   expect(wrapper.find('.media-gallery__media-count').text()).toBe('2 / 2');
  // });

  //
  // it('should change image on thumb click', () => {
  //   const wrapper = shallow(MediaGallery, {
  //     propsData: {
  //       media: mediaMock,
  //     },
  //   });
  //   wrapper.findAll('.thumb').at(1).trigger('click');
  //   expect(wrapper.findAll('.thumb').at(1).classes()).toContain('active');
  //   expect(wrapper.vm.selectedIndex).toBe(1);
  //   expect(wrapper.vm.selectedItem.id).toBe(2);
  // });
  //
  //
  // it('should have enter event on thumb', () => {
  //   const open = sinon.stub();
  //   const wrapper = shallow(MediaGallery, {
  //     propsData: {
  //       media: mediaMock,
  //     },
  //   });
  //
  //   wrapper.setMethods({
  //     open,
  //   });
  //   wrapper.find('.thumb').trigger('keydown.enter');
  //   expect(open.called).toBe(true);
  // });
  //

  //
  // it('should render embed if image type', () => {
  //   const wrapper = mount(MediaGallery, {
  //     propsData: {
  //       media: mediaMock,
  //     },
  //   });
  //   wrapper.find('.arrow-wrapper').trigger('click');
  //   wrapper.find('.arrow-wrapper').trigger('click');
  //   expect(wrapper.find('.thumb img').exists()).toBe(true);
  // });
  //
  // it('should render embed if video type', () => {
  //   const wrapper = mount(MediaGallery, {
  //     propsData: {
  //       media: mediaMock,
  //     },
  //   });
  //   wrapper.find('.arrow-wrapper').trigger('click');
  //   expect(wrapper.find('.embed').exists()).toBe(true);
  // });
});

describe('MediaGallery InPage', () => {
  it('should render current media number', () => {
    const wrapper = shallow(MediaGallery, {
      propsData: {
        media: mediaMock,
        inPage: true,
      },
    });

    expect(wrapper.find('.media-gallery__media-count').text()).toBe('1 / 2');
    wrapper.find('.arrow-wrapper').trigger('click');
    expect(wrapper.find('.media-gallery__media-count').text()).toBe('2 / 2');
  });

  it('should change image on thumb click', () => {
    const wrapper = shallow(MediaGallery, {
      propsData: {
        media: mediaMock,
        inPage: true,
      },
    });
    wrapper.findAll('.thumb').at(1).trigger('click');
    expect(wrapper.findAll('.thumb').at(1).classes()).toContain('active');
    expect(wrapper.vm.selectedIndex).toBe(1);
    expect(wrapper.vm.selectedItem.id).toBe(2);
  });

  it('should have enter event on thumb', () => {
    const open = sinon.stub();
    const wrapper = shallow(MediaGallery, {
      propsData: {
        media: mediaMock,
        inPage: true,
      },
    });

    wrapper.setMethods({
      open,
    });
    wrapper.find('.thumb').trigger('keydown.enter');
    expect(open.called).toBe(true);
  });

  it('should render embed if image type', () => {
    const wrapper = mount(MediaGallery, {
      propsData: {
        media: mediaMock,
        inPage: true,
      },
    });
    wrapper.find('.arrow-wrapper').trigger('click');
    wrapper.find('.arrow-wrapper').trigger('click');
    expect(wrapper.find('.thumb img').exists()).toBe(true);
  });

  it('should render embed if video type', () => {
    const wrapper = mount(MediaGallery, {
      propsData: {
        media: mediaMock,
        inPage: true,
      },
    });
    wrapper.find('.arrow-wrapper').trigger('click');
    expect(wrapper.find('.embed').exists()).toBe(true);
  });
});

describe('MediaGallery Pop-over', () => {
  it('should have pop-over classes', () => {
    const wrapper = mount(MediaGallery, {
      propsData: {
        media: mediaMock,
        popOver: true,
      },
    });

    expect(wrapper.find('.media-gallery').classes()).toContain('media-gallery--pop-over');
    expect(wrapper.find('.media-gallery--pop-over__media-count').exists()).toBe(true);
    expect(wrapper.find('.media-gallery--pop-over__close').exists()).toBe(true);
    expect(wrapper.find('.media-gallery__slider').classes()).toContain('media-gallery--pop-over__slider');
    expect(wrapper.find('.media-gallery__container').classes()).toContain('media-gallery--pop-over__container');
  });

  it('should render current media number', () => {
    const wrapper = shallow(MediaGallery, {
      propsData: {
        media: mediaMock,
        popOver: true,
      },
    });

    expect(wrapper.find('.media-gallery--pop-over__media-count').text()).toBe('1 / 2');
    wrapper.find('.arrow-wrapper').trigger('click');
    expect(wrapper.find('.media-gallery--pop-over__media-count').text()).toBe('2 / 2');
  });

  it('should have thumbnails component', () => {
    const wrapper = mount(MediaGallery, {
      propsData: {
        media: mediaMock,
        popOver: true,
      },
    });

    expect(wrapper.find('.thumbnails').exists()).toBe(true);
  });

  it('should have img thumbnails open callback', () => {
    const openThumb = sinon.stub();
    const wrapper = mount(MediaGallery, {
      propsData: {
        media: mediaMock,
        popOver: true,
      },
    });

    wrapper.setMethods({
      openThumb,
    });
    wrapper.find('.thumbnails__figure--item').trigger('click');
    expect(openThumb.called).toBe(true);
  });

  it('should open slider pop over on thumb click', () => {
    const wrapper = mount(MediaGallery, {
      propsData: {
        media: mediaMock,
        popOver: true,
      },
    });

    wrapper.find('.thumbnails__figure--item').trigger('click');
    expect(wrapper.vm.openState).toBe(true);
    expect(wrapper.find('.media-gallery').classes()).toContain('media-gallery--pop-over__open');
  });
});
