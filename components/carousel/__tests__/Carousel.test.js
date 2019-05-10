import {
  shallow,
  mount,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import sinon from 'sinon';
import Carousel from '../Carousel.vue';

expect.extend(toHaveNoViolations);

const storiesMock = [{
  src: 'test1',
  altText: 'test',
  title: 'Story 1',
  description: 'Story 2 description',
  buttonText: 'Register',
  buttonHref: 'google.com',
},
{
  src: 'test2',
  altText: 'test',
  title: 'Story 2',
  description: 'Story 2 description',
  buttonText: 'Login',
  buttonHref: 'google.com',
},
];

describe('Carousel', () => {
  it('should match snapshot', () => {
    const result = shallow(Carousel).element;
    expect(result).toMatchSnapshot();
  });

  it('should have default props and correct types stories', () => {
    const wrapper = shallow(Carousel);
    const {
      stories,
    } = wrapper.vm.$options.props;

    expect(stories.type).toBe(Array);
    expect(wrapper.props().stories).toEqual([{}]);
  });

  it('should accept stories prop with correct type', () => {
    const wrapper = shallow(Carousel, {
      propsData: {
        stories: storiesMock,
      },
    });

    expect(typeof wrapper.props().stories).toBe('object');
    expect(wrapper.props().stories).toBe(storiesMock);
  });

  it('should render story in slider from prop', () => {
    const wrapper = mount(Carousel, {
      propsData: {
        stories: storiesMock,
      },
    });
    expect(wrapper.props().stories.length).toBe(2);
    expect(wrapper.find('.carousel--slider img').attributes().src).toBe('test1');
  });

  it('should set active to first story as default', () => {
    const wrapper = mount(Carousel, {
      propsData: {
        stories: storiesMock,
      },
    });
    expect(wrapper.vm.selectedIndex).toBe(0);
    expect(wrapper.find('.carousel--slider img').exists()).toBe(true);
  });

  it('should render default story title and description', () => {
    const wrapper = mount(Carousel, {
      propsData: {
        stories: storiesMock,
      },
    });
    expect(wrapper.find('.carousel--panel--title').text()).toBe('Story 1');
    expect(wrapper.find('.carousel--panel--description').text()).toBe('Story 2 description');
  });

  it('should render stories titles menu', () => {
    const wrapper = mount(Carousel, {
      propsData: {
        stories: storiesMock,
      },
    });
    expect(wrapper.findAll('.carousel--panel--stories-menu--text').at(0).text()).toBe('Story 1');
    expect(wrapper.findAll('.carousel--panel--stories-menu--text').at(1).text()).toBe('Story 2');
  });

  it('should have click event on stories menu title', () => {
    const moveToStory = sinon.stub();
    const wrapper = shallow(Carousel, {
      propsData: {
        stories: storiesMock,
      },
    });

    wrapper.setMethods({
      moveToStory,
    });
    // wrapper.find('.media-gallery__arrow-wrapper').trigger('click');
    // expect(move.called).toBe(true);
  });

//
//   it('should render media video in slider from prop', () => {
//     const wrapper = mount(MediaGallery, {
//       propsData: {
//         media: mediaMock,
//       },
//     });
//     expect(wrapper.props().media.length).toBe(2);
//     expect(wrapper.find('iframe').exists()).toBe(true);
//   });
//
//   it('should set active to first media as default', () => {
//     const wrapper = mount(MediaGallery, {
//       propsData: {
//         media: mediaMock,
//       },
//     });
//     expect(wrapper.vm.selectedIndex).toBe(0);
//     expect(wrapper.vm.selectedItem.id).toBe(1);
//     expect(wrapper.find('.media-gallery__container img').exists()).toBe(true);
//   });
//
//   it('should have click event on arrows', () => {
//     const move = sinon.stub();
//     const wrapper = shallow(MediaGallery, {
//       propsData: {
//         media: mediaMock,
//       },
//     });
//
//     wrapper.setMethods({
//       move,
//     });
//     wrapper.find('.media-gallery__arrow-wrapper').trigger('click');
//     expect(move.called).toBe(true);
//   });
//
//   it('should have click event on thumb', () => {
//     const open = sinon.stub();
//     const wrapper = shallow(MediaGallery, {
//       propsData: {
//         media: mediaMock,
//       },
//     });
//
//     wrapper.setMethods({
//       open,
//     });
//     wrapper.find('.media-gallery__thumbnails--image').trigger('click');
//     expect(open.called).toBe(true);
//   });
//
//   it('should change media on arrow click', () => {
//     const wrapper = shallow(MediaGallery, {
//       propsData: {
//         media: mediaMock,
//       },
//     });
//
//     wrapper.find('.media-gallery__arrow-wrapper').trigger('click');
//     expect(wrapper.vm.selectedIndex).toBe(1);
//     expect(wrapper.vm.selectedItem.id).toBe(2);
//   });
//
//   it('should have click event on arrows', () => {
//     const move = sinon.stub();
//     const wrapper = shallow(MediaGallery, {
//       propsData: {
//         media: mediaMock,
//       },
//     });
//
//     wrapper.setMethods({
//       move,
//     });
//     wrapper.find('.media-gallery__arrow-wrapper').trigger('keydown.enter');
//     expect(move.called).toBe(true);
//   });
//
//   it('should render current image title/description', () => {
//     const wrapper = mount(MediaGallery, {
//       propsData: {
//         media: mediaMock,
//       },
//     });
//
//     expect(wrapper.vm.selectedIndex).toBe(0);
//     expect(wrapper.vm.selectedItem.id).toBe(1);
//     expect(wrapper.find('.media-gallery__title').text()).toBe('test1');
//     expect(wrapper.find('.media-gallery__description').text()).toBe('test1');
//     wrapper.find('.media-gallery__arrow-wrapper').trigger('click');
//     expect(wrapper.find('.media-gallery__title').text()).toBe('test2');
//     expect(wrapper.find('.media-gallery__description').text()).toBe('test2');
//   });
// });
//
// describe('MediaGallery InPage', () => {
//   it('should render current media number', () => {
//     const wrapper = shallow(MediaGallery, {
//       propsData: {
//         media: mediaMock,
//         inPage: true,
//       },
//     });
//
//     expect(wrapper.find('.media-gallery__media-count').text()).toBe('1 / 2');
//     wrapper.find('.media-gallery__arrow-wrapper').trigger('click');
//     expect(wrapper.find('.media-gallery__media-count').text()).toBe('2 / 2');
//   });
//
//   it('should change image on thumb click', () => {
//     const wrapper = shallow(MediaGallery, {
//       propsData: {
//         media: mediaMock,
//         inPage: true,
//       },
//     });
//     wrapper.findAll('.media-gallery__thumbnails--thumb').at(1).trigger('click');
//     expect(wrapper.findAll('.media-gallery__thumbnails--thumb').at(1).classes()).toContain('active');
//     expect(wrapper.vm.selectedIndex).toBe(1);
//     expect(wrapper.vm.selectedItem.id).toBe(2);
//   });
//
//   it('should have enter event on thumb', () => {
//     const open = sinon.stub();
//     const wrapper = shallow(MediaGallery, {
//       propsData: {
//         media: mediaMock,
//         inPage: true,
//       },
//     });
//
//     wrapper.setMethods({
//       open,
//     });
//     wrapper.find('.media-gallery__thumbnails--image').trigger('keydown.enter');
//     expect(open.called).toBe(true);
//   });
//
//   it('should render embed if image type', () => {
//     const wrapper = mount(MediaGallery, {
//       propsData: {
//         media: mediaMock,
//         inPage: true,
//       },
//     });
//     wrapper.find('.media-gallery__arrow-wrapper').trigger('click');
//     wrapper.find('.media-gallery__arrow-wrapper').trigger('click');
//     expect(wrapper.find('.media-gallery__thumbnails--image').exists()).toBe(true);
//   });
//
//   it('should render embed if video type', () => {
//     const wrapper = mount(MediaGallery, {
//       propsData: {
//         media: mediaMock,
//         inPage: true,
//       },
//     });
//     wrapper.find('.media-gallery__arrow-wrapper').trigger('click');
//     expect(wrapper.find('.embed').exists()).toBe(true);
//   });
// });
//
// describe('MediaGallery Pop-over', () => {
//   it('should have pop-over classes', () => {
//     const wrapper = mount(MediaGallery, {
//       propsData: {
//         media: mediaMock,
//         popOver: true,
//       },
//     });
//
//     expect(wrapper.find('.media-gallery').classes()).toContain('media-gallery--pop-over');
//     expect(wrapper.find('.media-gallery--pop-over__media-count').exists()).toBe(true);
//     expect(wrapper.find('.media-gallery--pop-over__close').exists()).toBe(true);
//     expect(wrapper.find('.media-gallery__slider').classes()).toContain('media-gallery--pop-over__slider');
//     expect(wrapper.find('.media-gallery__container').classes()).toContain('media-gallery--pop-over__container');
//   });
//
//   it('should render current media number', () => {
//     const wrapper = shallow(MediaGallery, {
//       propsData: {
//         media: mediaMock,
//         popOver: true,
//       },
//     });
//
//     expect(wrapper.find('.media-gallery--pop-over__media-count').text()).toBe('1 / 2');
//     wrapper.find('.media-gallery__arrow-wrapper').trigger('click');
//     expect(wrapper.find('.media-gallery--pop-over__media-count').text()).toBe('2 / 2');
//   });
//
//   it('should have thumbnails component', () => {
//     const wrapper = mount(MediaGallery, {
//       propsData: {
//         media: mediaMock,
//         popOver: true,
//       },
//     });
//
//     expect(wrapper.find('.thumbnails').exists()).toBe(true);
//   });
//
//   it('should have img thumbnails open callback', () => {
//     const openThumb = sinon.stub();
//     const wrapper = mount(MediaGallery, {
//       propsData: {
//         media: mediaMock,
//         popOver: true,
//       },
//     });
//
//     wrapper.setMethods({
//       openThumb,
//     });
//     wrapper.find('.thumbnails__item div').trigger('click');
//     expect(openThumb.called).toBe(true);
//   });
//
//   it('should open slider pop over on thumb click', () => {
//     const wrapper = mount(MediaGallery, {
//       propsData: {
//         media: mediaMock,
//         popOver: true,
//       },
//     });
//
//     wrapper.find('.thumbnails__item div').trigger('click');
//     expect(wrapper.vm.openState).toBe(true);
//     expect(wrapper.find('.media-gallery').classes()).toContain('media-gallery--pop-over__open');
//   });
});
