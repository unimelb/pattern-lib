import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import BlockQuotation from '../BlockQuotation.vue';

expect.extend(toHaveNoViolations);

describe('BlockQuotation', () => {
  it('should match snapshot', () => {
    const result = shallow(BlockQuotation).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(BlockQuotation).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
