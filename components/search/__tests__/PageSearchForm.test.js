import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import PageSearchForm from '../PageSearchForm.vue';

expect.extend(toHaveNoViolations);

describe('PageSearchForm', () => {
  it('should match snapshot', () => {
    const result = shallow(PageSearchForm).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(PageSearchForm).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
