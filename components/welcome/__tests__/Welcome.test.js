import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import Welcome from '../Welcome.vue';

expect.extend(toHaveNoViolations);

describe('Welcome', () => {
  it('should match snapshot', () => {
    const result = shallow(Welcome).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(Welcome).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
