import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import SectionTwoCol from '../SectionTwoCol.vue';

expect.extend(toHaveNoViolations);

describe('SectionTwoCol', () => {
  it('should match snapshot', () => {
    const result = shallow(SectionTwoCol).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(SectionTwoCol).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
