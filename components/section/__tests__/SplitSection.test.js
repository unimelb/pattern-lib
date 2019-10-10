import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import SplitSection from '../SplitSection.vue';

expect.extend(toHaveNoViolations);

describe('SplitSection', () => {
  it('should match snapshot', () => {
    const result = shallow(SplitSection).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(SplitSection).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
