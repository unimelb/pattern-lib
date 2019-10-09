import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import SvgIcon from '../SvgIcon.vue';

expect.extend(toHaveNoViolations);

describe('SvgIcon', () => {
  it('should match snapshot', () => {
    const result = shallow(SvgIcon).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(SvgIcon).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
