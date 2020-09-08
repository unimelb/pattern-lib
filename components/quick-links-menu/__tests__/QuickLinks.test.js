import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import QuickLinks from '../QuickLinks.vue';

expect.extend(toHaveNoViolations);

describe('QuickLinks', () => {
  it('should match snapshot', () => {
    const result = shallow(QuickLinks).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(QuickLinks).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
