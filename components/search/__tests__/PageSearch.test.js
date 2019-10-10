import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import PageSearch from '../PageSearch.vue';

expect.extend(toHaveNoViolations);

describe('PageSearch', () => {
  it.skip('should match snapshot', () => {
    const result = shallow(PageSearch).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(PageSearch).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
