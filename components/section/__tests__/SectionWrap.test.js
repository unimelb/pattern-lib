import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import SectionWrap from '../SectionWrap.vue';

expect.extend(toHaveNoViolations);

describe('SectionWrap', () => {
  it('should match snapshot', () => {
    const result = shallow(SectionWrap).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(SectionWrap).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
