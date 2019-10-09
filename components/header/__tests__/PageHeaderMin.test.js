import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import PageHeaderMin from '../PageHeaderMin.vue';

expect.extend(toHaveNoViolations);

describe('PageHeaderMin', () => {
  it('should match snapshot', () => {
    const result = shallow(PageHeaderMin).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(PageHeaderMin).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
