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
    const result = shallow(Carousel, {
      propsData: {
        stories: storiesMock,
      },
    }).element;

    expect(result).toMatchSnapshot();
  });

  it('should have default props and correct types stories', () => {
    const wrapper = shallow(Carousel, {
      propsData: {
        stories: [],
      },
    });
    const {
      stories,
    } = wrapper.vm.$options.props;

    expect(stories.type).toBe(Array);
    expect(wrapper.props().stories).toEqual([]);
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

    expect(wrapper.find('.carousel__image').attributes().style).toBe('background-image: url(test1); background-position: center;');
  });

  it('should set active to first story as default', () => {
    const wrapper = mount(Carousel, {
      propsData: {
        stories: storiesMock,
      },
    });
    expect(wrapper.vm.selectedIndex).toBe(0);
    expect(wrapper.find('.carousel__image').exists()).toBe(true);
  });

  it('should render default story title and description', () => {
    const wrapper = mount(Carousel, {
      propsData: {
        stories: storiesMock,
      },
    });
    expect(wrapper.find('.carousel__title').text()).toBe('Story 1');
    expect(wrapper.find('.carousel__description').text()).toBe('Story 2 description');
  });

  it('should render stories titles menu', () => {
    const wrapper = mount(Carousel, {
      propsData: {
        stories: storiesMock,
      },
    });
    expect(wrapper.findAll('.carousel__navigation-link').at(0).text()).toBe('Story 1');
    expect(wrapper.findAll('.carousel__navigation-link').at(1).text()).toBe('Story 2');
  });

  it('should have click/enter event on stories menu title', () => {
    const moveToStory = sinon.stub();
    const wrapper = shallow(Carousel, {
      propsData: {
        stories: storiesMock,
      },
    });

    wrapper.setMethods({
      moveToStory,
    });
    wrapper.find('.carousel__navigation-link').trigger('click');
    expect(moveToStory.called).toBe(true);
    wrapper.find('.carousel__navigation-link').trigger('keydown.enter');
    expect(moveToStory.called).toBe(true);
  });

  it('should change story on click event on stories menu title', () => {
    const wrapper = shallow(Carousel, {
      propsData: {
        stories: storiesMock,
      },
      attachToDocument: true,
    });

    wrapper.findAll('.carousel__navigation-link').at(1).trigger('click');
    expect(wrapper.vm.selectedIndex).toBe(1);
  });

  it('should set "active" state to active story', () => {
    const wrapper = shallow(Carousel, {
      propsData: {
        stories: storiesMock,
      },
    });

    expect(wrapper.vm.storiesData[0].isActive).toBe(true);
    expect(wrapper.find('.carousel__navigation-link').classes()).toContain('carousel__navigation-link--active');
  });

  it('should set "active" state to story on menu title click', () => {
    const wrapper = shallow(Carousel, {
      propsData: {
        stories: storiesMock,
      },
      attachToDocument: true,
    });

    wrapper.findAll('.carousel__navigation-link').at(1).trigger('click');
    expect(wrapper.vm.storiesData[1].isActive).toBe(true);
    expect(wrapper.findAll('.carousel__navigation-link').at(1).classes()).toContain('carousel__navigation-link--active');
  });

  it('should have click/enter event on stop/pause control', () => {
    const stopSliding = sinon.stub();
    const startSliding = sinon.stub();
    const wrapper = mount(Carousel, {
      propsData: {
        stories: storiesMock,
      },
    });

    wrapper.setMethods({
      stopSliding,
      startSliding,
    });

    const pauseStop = wrapper.find('.carousel__controls-stop-pause');

    pauseStop.trigger('click');
    expect(stopSliding.called).toBe(true);
    wrapper.vm.paused = false;
    pauseStop.trigger('keydown.enter');
    expect(stopSliding.called).toBe(true);
    wrapper.setData({
      paused: true,
    });
    pauseStop.trigger('click');
    expect(startSliding.called).toBe(true);
    pauseStop.trigger('keydown.enter');
    expect(startSliding.called).toBe(true);
  });

  it('should have click/enter event on left/right control', () => {
    const prevStory = sinon.stub();
    const nextStory = sinon.stub();
    const wrapper = mount(Carousel, {
      propsData: {
        stories: storiesMock,
      },
    });

    wrapper.setMethods({
      prevStory,
      nextStory,
    });

    const prev = wrapper.findAll('.carousel__controls-item').at(0);
    const next = wrapper.findAll('.carousel__controls-item').at(2);

    prev.trigger('click');
    expect(prevStory.called).toBe(true);
    prev.trigger('keydown.enter');
    expect(prevStory.called).toBe(true);

    next.trigger('click');
    expect(nextStory.called).toBe(true);
    next.trigger('keydown.enter');
    expect(nextStory.called).toBe(true);
  });

  it('should change slide on left/right controls click', () => {
    const slide = sinon.stub();

    const wrapper = mount(Carousel, {
      propsData: {
        stories: storiesMock,
      },
    });

    wrapper.setMethods({
      slide,
    });

    const prev = wrapper.findAll('.carousel__controls-item').at(0);
    const next = wrapper.findAll('.carousel__controls-item').at(2);

    prev.trigger('click');
    expect(slide.called).toBe(true);
    next.trigger('click');
    expect(slide.called).toBe(true);
  });
});
