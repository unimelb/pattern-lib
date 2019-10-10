import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import SplitSectionQuote from '../SplitSectionQuote.vue';

expect.extend(toHaveNoViolations);

describe('SplitSectionQuote', () => {
  it('should match snapshot', () => {
    const result = shallow(SplitSectionQuote).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(SplitSectionQuote).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
