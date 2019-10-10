import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import SidePanelNavItem from '../SidePanelNavItem.vue';

expect.extend(toHaveNoViolations);

describe('SidePanelNavItem', () => {
  it('should match snapshot', () => {
    const result = shallow(SidePanelNavItem).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(SidePanelNavItem).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
