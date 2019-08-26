import {
  shallow,
  mount,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import sinon from 'sinon';
import Slider from '../Slider.vue';

expect.extend(toHaveNoViolations);

const storiesMock = [{
  src: 'test1',
  imagePosition: 'center',
  altText: 'test',
  title: 'Story 1',
  description: 'Story 2 description',
  buttonText: 'Register',
  buttonHref: 'google.com',
},
{
  src: 'test2',
  imagePosition: 'center',
  altText: 'test',
  title: 'Story 2',
  description: 'Story 2 description',
  buttonText: 'Login',
  buttonHref: 'google.com',
},
];

describe('Slider', () => {
  it('should match snapshot', () => {
    const result = shallow(Slider, {
      propsData: {
        stories: storiesMock,
      },
    }).element;

    expect(result).toMatchSnapshot();
  });

  it('should have default props and correct types stories', () => {
    const wrapper = shallow(Slider, {
      propsData: {
        stories: storiesMock,
      },
    });
    const {
      stories,
    } = wrapper.vm.$options.props;

    expect(stories.type).toBe(Array);
    expect(wrapper.props().stories).toEqual(storiesMock);
  });

  it('should accept stories prop with correct type', () => {
    const wrapper = shallow(Slider, {
      propsData: {
        stories: storiesMock,
      },
    });

    expect(typeof wrapper.props().stories).toBe('object');
    expect(wrapper.props().stories).toBe(storiesMock);
  });

  it('should render story in slider from prop', () => {
    const wrapper = mount(Slider, {
      propsData: {
        stories: storiesMock,
      },
    });
    expect(wrapper.props().stories.length).toBe(2);

    expect(wrapper.find('.Slider__image').attributes().style).toBe('background-image: url(test1); background-position: center;');
  });

  it('should set active to first story as default', () => {
    const wrapper = mount(Slider, {
      propsData: {
        stories: storiesMock,
      },
    });
    expect(wrapper.vm.selectedIndex).toBe(0);
    expect(wrapper.find('.Slider__image').exists()).toBe(true);
  });

  it('should render default story title and description', () => {
    const wrapper = mount(Slider, {
      propsData: {
        stories: storiesMock,
      },
    });
    expect(wrapper.find('.Slider__title').text()).toBe('Story 1');
    expect(wrapper.find('.Slider__description').text()).toBe('Story 2 description');
  });

  it('should render stories titles menu', () => {
    const wrapper = mount(Slider, {
      propsData: {
        stories: storiesMock,
      },
    });
    expect(wrapper.findAll('.Slider__navigation-link').at(0).text()).toBe('Story 1');
    expect(wrapper.findAll('.Slider__navigation-link').at(1).text()).toBe('Story 2');
  });

  it('should have click/enter event on stories menu title', () => {
    const moveToStory = sinon.stub();
    const wrapper = shallow(Slider, {
      propsData: {
        stories: storiesMock,
      },
    });

    wrapper.setMethods({
      moveToStory,
    });
    wrapper.find('.Slider__navigation-link').trigger('click');
    expect(moveToStory.called).toBe(true);
    wrapper.find('.Slider__navigation-link').trigger('keydown.enter');
    expect(moveToStory.called).toBe(true);
  });

  it('should change story on click event on stories menu title', () => {
    const wrapper = shallow(Slider, {
      propsData: {
        stories: storiesMock,
      },
      attachToDocument: true,
    });

    wrapper.findAll('.Slider__navigation-link').at(1).trigger('click');
    expect(wrapper.vm.selectedIndex).toBe(1);
  });

  it('should set "active" state to active story', () => {
    const wrapper = shallow(Slider, {
      propsData: {
        stories: storiesMock,
      },
    });

    expect(wrapper.vm.storiesData[0].isActive).toBe(true);
    expect(wrapper.find('.Slider__navigation-link').classes()).toContain('Slider__navigation-link--active');
  });

  it('should set "active" state to story on menu title click', () => {
    const wrapper = shallow(Slider, {
      propsData: {
        stories: storiesMock,
      },
      attachToDocument: true,
    });

    wrapper.findAll('.Slider__navigation-link').at(1).trigger('click');
    expect(wrapper.vm.storiesData[1].isActive).toBe(true);
    expect(wrapper.findAll('.Slider__navigation-link').at(1).classes()).toContain('Slider__navigation-link--active');
  });

  it('should have click/enter event on stop/pause control', () => {
    const stopSliding = sinon.stub();
    const startSliding = sinon.stub();
    const wrapper = mount(Slider, {
      propsData: {
        stories: storiesMock,
      },
    });

    wrapper.setMethods({
      stopSliding,
      startSliding,
    });

    const pauseStop = wrapper.find('.Slider__controls-stop-pause');

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
    const wrapper = mount(Slider, {
      propsData: {
        stories: storiesMock,
      },
    });

    wrapper.setMethods({
      prevStory,
      nextStory,
    });

    const prev = wrapper.findAll('.Slider__controls-item').at(0);
    const next = wrapper.findAll('.Slider__controls-item').at(2);

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

    const wrapper = mount(Slider, {
      propsData: {
        stories: storiesMock,
      },
    });

    wrapper.setMethods({
      slide,
    });

    const prev = wrapper.findAll('.Slider__controls-item').at(0);
    const next = wrapper.findAll('.Slider__controls-item').at(2);

    prev.trigger('click');
    expect(slide.called).toBe(true);
    next.trigger('click');
    expect(slide.called).toBe(true);
  });
});
