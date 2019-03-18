import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import OutPageNavigation from '../OutPageNavigation.vue';

expect.extend(toHaveNoViolations);

describe('OutPageNavigation', () => {
  it('should match snapshot', () => {
    const result = shallow(OutPageNavigation).element;
    expect(result).toMatchSnapshot();
  });

  it('should have default props and correct types cardTitle/cardLinks/color', () => {
    const wrapper = shallow(OutPageNavigation);
    const {
      cardTitle,
      cardLinks,
      color,
    } = wrapper.vm.$options.props;

    expect(cardTitle.type).toEqual(String);
    expect(wrapper.props().cardTitle).toBe('');

    expect(cardLinks.type).toEqual(Array);
    expect(wrapper.props().href).toBe(undefined);

    expect(color.type).toEqual(String);
    expect(wrapper.props().color).toBe('');
  });

  it('should render cardTitle from prop with correct type', () => {
    const cardTitle = 'Test cardTitle';
    const wrapper = shallow(OutPageNavigation, {
      propsData: {
        cardTitle,
      },
    });

    expect(typeof wrapper.props().cardTitle).toBe('string');
    expect(wrapper.props().cardTitle).toBe(cardTitle);
  });

  it('should render cardLinks from prop with correct type', () => {
    const cardLinks = '[links]';
    const wrapper = shallow(OutPageNavigation, {
      propsData: {
        cardLinks,
      },
    });

    expect(typeof wrapper.props().cardLinks).toBe('string');
    expect(wrapper.props().cardLinks).toBe(cardLinks);
  });

  it('should render with correct color from prop', () => {
    const color = 'navy';
    const wrapper = shallow(OutPageNavigation, {
      propsData: {
        color,
      },
    });

    expect(typeof wrapper.props().color).toBe('string');
    expect(wrapper.props().color).toBe(color);
  });
});
