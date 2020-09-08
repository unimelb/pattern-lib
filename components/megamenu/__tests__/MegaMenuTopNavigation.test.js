import { shallow } from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import MegaMenuTopNavigation from '../MegaMenuTopNavigation.vue';

expect.extend(toHaveNoViolations);

describe('MegaMenuTitle', () => {
  it('should match snapshot', () => {
    const result = shallow(MegaMenuTopNavigation).element;
    expect(result).toMatchSnapshot();
  });

  it('should have default props and correct types items', () => {
    const wrapper = shallow(MegaMenuTopNavigation);
    const { items } = wrapper.vm.$options.props;

    expect(items.type).toBe(Array);
    expect(wrapper.props().items).toEqual([]);
  });

  it('should render items from prop', () => {
    const wrapper = shallow(MegaMenuTopNavigation, {
      propsData: {
        items: [
          {
            title: 'test',
            href: '/',
          },
        ],
      },
    });
    expect(wrapper.props().items.length).toBe(1);
    expect(wrapper.find('.menu-top__item').text()).toBe('test');
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(MegaMenuTopNavigation).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
