import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import SublinkMenu from '../SublinkMenu.vue';

expect.extend(toHaveNoViolations);

describe('SublinkMenu', () => {
  it('should match snapshot', () => {
    const result = shallow(SublinkMenu).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(SublinkMenu).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
