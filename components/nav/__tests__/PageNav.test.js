import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import PageNav from '../PageNav.vue';

expect.extend(toHaveNoViolations);

describe('PageNav', () => {
  it('should match snapshot', () => {
    const result = shallow(PageNav).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(PageNav).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
