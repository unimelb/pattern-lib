import { shallow } from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import FocusWrapper from '../FocusWrapper.vue';
import SvgIcon from '../../icons/SvgIcon.vue';

expect.extend(toHaveNoViolations);

const testComponent = {
  name: 'test-component',
  template: '<p class="test">test</p>',
};

describe('FocusWrapper', () => {
  it('should match snapshot', () => {
    const result = shallow(FocusWrapper).element;
    expect(result).toMatchSnapshot();
  });

  it('should render component inside', () => {
    const wrapper = shallow(FocusWrapper, {
      slots: {
        default: [testComponent],
      },
    });
    expect(wrapper.find('p').exists()).toBe(true);
  });

  it('should render any content inside', () => {
    const wrapper = shallow(FocusWrapper, {
      slots: {
        default: ['<p>test</p>'],
      },
    });
    expect(wrapper.find('p').exists()).toBe(true);
  });

  it('should have focus top and bottom item,', () => {
    const wrapper = shallow(FocusWrapper);
    expect(wrapper.find(SvgIcon).exists()).toBe(true);
  });

  it('should have default props color/semiOpaque/padding', () => {
    const wrapper = shallow(FocusWrapper);
    expect(wrapper.props().color).toBe('');
    expect(wrapper.props().semiOpaque).toBe(false);
    expect(wrapper.props().padded).toBe(false);
    expect(wrapper.classes().includes('card-focus--padded')).toBe(false);
  });

  it('should accept only correct color value', () => {
    const wrapper = shallow(FocusWrapper, {
      propsData: {
        color: 'black',
      },
    });
    const { color } = wrapper.vm.$options.props;
    expect(color.type).toBe(String);
    expect(color.validator && color.validator('black')).toBeFalsy();
  });

  it('should have opacity', () => {
    const wrapper = shallow(FocusWrapper, {
      propsData: {
        semiOpaque: true,
      },
    });

    expect(wrapper.props().semiOpaque).toBe(true);
  });

  it('should render padded', () => {
    const wrapper = shallow(FocusWrapper, {
      propsData: {
        padded: true,
      },
    });

    expect(wrapper.props().padded).toBe(true);
    expect(wrapper.classes().includes('card-focus--padded')).toBe(true);
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(FocusWrapper).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
