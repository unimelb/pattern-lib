import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import Tabs from '../Tabs.vue';

expect.extend(toHaveNoViolations);

describe('Tabs', () => {
  it('should match snapshot', () => {
    const result = shallow(Tabs).element;
    expect(result).toMatchSnapshot();
  });

  it('should be alternate tab with yellow border', () => {
    const wrapper = shallow(Tabs, {
      propsData: {
        alt: '',
        color: 'yellow',
      },
    });

    expect(wrapper.find('.tabs--alt').exists()).toBe(true);
    expect(wrapper.find('.tabs__tablist--alt').exists()).toBe(true);
    expect(wrapper.find('.tabs__tablist--yellow').exists()).toBe(true);

    expect(wrapper.element).toMatchSnapshot();
  });

  // TODO: fix a11y test
  it.skip('Component throws no accessibility violations', (done) => {
    const html = shallow(Tabs, {
      data: {
        panels: [],
      },
    }).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
