import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import SplitSectionHeader from '../SplitSectionHeader.vue';

expect.extend(toHaveNoViolations);

describe('SplitSectionHeader', () => {
  it('should match snapshot', () => {
    const result = shallow(SplitSectionHeader).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(SplitSectionHeader).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
