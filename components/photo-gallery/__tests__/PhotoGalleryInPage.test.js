import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import sinon from 'sinon';
import PhotoGalleryInPage from '../PhotoGalleryInPage.vue';

expect.extend(toHaveNoViolations);

const imagesMock = [{
  id: 1,
  src: 'test',
  title: 'test1',
  description: 'test1',
},
{
  id: 2,
  src: 'test',
  title: 'test2',
  description: 'test2',
},
];

describe('PhotoGalleryInPage', () => {
  it('should match snapshot', () => {
    const result = shallow(PhotoGalleryInPage).element;
    expect(result).toMatchSnapshot();
  });

  it('should have default props and correct types images', () => {
    const wrapper = shallow(PhotoGalleryInPage);
    const {
      images,
    } = wrapper.vm.$options.props;

    expect(images.type).toBe(Array);
    expect(wrapper.props().images).toEqual([{}]);
  });

  it('should render images from prop', () => {
    const wrapper = shallow(PhotoGalleryInPage, {
      propsData: {
        images: imagesMock,
      },
    });
    expect(wrapper.props().images.length).toBe(2);
    expect(wrapper.find('img').attributes().src).toBe('test');
  });

  it('should set active to first image as default', () => {
    const wrapper = shallow(PhotoGalleryInPage, {
      propsData: {
        images: imagesMock,
      },
    });
    expect(wrapper.vm.selectedIndex).toBe(0);
    expect(wrapper.vm.selectedItem.id).toBe(1);
    expect(wrapper.find('.photo-gallery-in-page--container img').exists()).toBe(true);
  });

  it('should have click event on arrows', () => {
    const move = sinon.stub();
    const wrapper = shallow(PhotoGalleryInPage, {
      propsData: {
        images: imagesMock,
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
    const wrapper = shallow(PhotoGalleryInPage, {
      propsData: {
        images: imagesMock,
      },
    });

    wrapper.setMethods({
      open,
    });
    wrapper.find('.thumb').trigger('click');
    expect(open.called).toBe(true);
  });

  it('should change image on arrow click', () => {
    const wrapper = shallow(PhotoGalleryInPage, {
      propsData: {
        images: imagesMock,
      },
    });

    wrapper.find('.arrow-wrapper').trigger('click');
    expect(wrapper.vm.selectedIndex).toBe(1);
    expect(wrapper.vm.selectedItem.id).toBe(2);
  });

  it('should change image on thumb click', () => {
    const wrapper = shallow(PhotoGalleryInPage, {
      propsData: {
        images: imagesMock,
      },
    });
    wrapper.findAll('.thumb').at(1).trigger('click');
    expect(wrapper.findAll('.thumb').at(1).classes()).toContain('active');
    expect(wrapper.vm.selectedIndex).toBe(1);
    expect(wrapper.vm.selectedItem.id).toBe(2);
  });

  it('should have click event on arrows', () => {
    const move = sinon.stub();
    const wrapper = shallow(PhotoGalleryInPage, {
      propsData: {
        images: imagesMock,
      },
    });

    wrapper.setMethods({
      move,
    });
    wrapper.find('.arrow-wrapper').trigger('keydown.enter');
    expect(move.called).toBe(true);
  });

  it('should have enter event on thumb', () => {
    const open = sinon.stub();
    const wrapper = shallow(PhotoGalleryInPage, {
      propsData: {
        images: imagesMock,
      },
    });

    wrapper.setMethods({
      open,
    });
    wrapper.find('.thumb').trigger('keydown.enter');
    expect(open.called).toBe(true);
  });

  it('should render current image number', () => {
    const wrapper = shallow(PhotoGalleryInPage, {
      propsData: {
        images: imagesMock,
      },
    });

    expect(wrapper.find('.photo-gallery-in-page__images-count').text()).toBe('1 / 2');
    wrapper.find('.arrow-wrapper').trigger('click');
    expect(wrapper.find('.photo-gallery-in-page__images-count').text()).toBe('2 / 2');
  });

  it('should render current image title/description', () => {
    const wrapper = shallow(PhotoGalleryInPage, {
      propsData: {
        images: imagesMock,
      },
    });

    expect(wrapper.find('.photo-gallery-in-page__title').text()).toBe('test1');
    expect(wrapper.find('.photo-gallery-in-page__description').text()).toBe('test1');
    wrapper.find('.arrow-wrapper').trigger('click');
    expect(wrapper.find('.photo-gallery-in-page__title').text()).toBe('test2');
    expect(wrapper.find('.photo-gallery-in-page__description').text()).toBe('test2');
  });
});
