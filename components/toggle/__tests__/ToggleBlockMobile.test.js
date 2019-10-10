import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import ToggleBlockMobile from '../ToggleBlockMobile.vue';

expect.extend(toHaveNoViolations);

describe('ToggleBlockMobile', () => {
  it('should match snapshot', () => {
    const result = shallow(ToggleBlockMobile).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(ToggleBlockMobile).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
