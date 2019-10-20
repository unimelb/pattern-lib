import {
  mount,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import SidePanel from '../SidePanel.vue';
import SidePanelNavItem from '../SidePanelNavItem.vue';

expect.extend(toHaveNoViolations);

describe('SidePanel', () => {
  it('should match snapshot', () => {
    const result = mount(SidePanel).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = mount(SidePanel, {
      propsData: {
        title: 'mock title',
      },
      slots: { SidePanelNavItem },
    }).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
