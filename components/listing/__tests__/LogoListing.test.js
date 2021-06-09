import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import LogoListing from '../LogoListing.vue';

expect.extend(toHaveNoViolations);

describe('LogoListing', () => {
  it('should match snapshot', () => {
    const result = shallow(LogoListing).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(LogoListing).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
