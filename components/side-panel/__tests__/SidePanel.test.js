import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import SidePanel from '../SidePanel.vue';

expect.extend(toHaveNoViolations);

describe('SidePanel', () => {
  it('should match snapshot', () => {
    const result = shallow(SidePanel).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(SidePanel).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
