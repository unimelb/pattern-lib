import { shallow, mount } from 'vue-test-utils';
import { toHaveNoViolations } from 'jest-axe';
import sinon from 'sinon';
import Thumbnails from '../Thumbnails.vue';

expect.extend(toHaveNoViolations);

const imagesMock = [
  {
    id: 1,
    src: 'test',
    title: 'test1',
    description: 'test1',
    size: '1of1',
  },
  {
    id: 2,
    src: 'test',
    title: 'test2',
    description: 'test2',
    size: '1of1',
  },
];

describe('Thumbnails', () => {
  it('should match snapshot', () => {
    const result = shallow(Thumbnails).element;
    expect(result).toMatchSnapshot();
  });

  it('should have default props and correct types images/callback', () => {
    const wrapper = shallow(Thumbnails);
    const {
      images, callback,
    } = wrapper.vm.$options.props;

    expect(images.type).toBe(Array);
    expect(callback.type).toBe(Function);
    expect(wrapper.props().images).toEqual([{}]);
  });

  it('should render images from prop', () => {
    const wrapper = mount(Thumbnails, {
      propsData: {
        images: imagesMock,
      },
    });
    expect(wrapper.props().images.length).toBe(2);
    expect(wrapper.find('img').attributes().src).toBe('test');
  });

  it('should have click event on thumb', () => {
    const callback = sinon.spy();
    const wrapper = mount(Thumbnails, {
      propsData: {
        images: imagesMock,
        callback,
      },
    });
    wrapper.find('img').trigger('click');
    expect(callback.called).toBe(true);
  });
});
