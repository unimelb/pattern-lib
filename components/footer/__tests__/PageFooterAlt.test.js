import { shallow } from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import PageFooterAlt from '../PageFooterAlt.vue';

expect.extend(toHaveNoViolations);

describe('PageFooterAlt', () => {
  it('should match snapshot', () => {
    const result = shallow(PageFooterAlt).element;
    expect(result).toMatchSnapshot();
  });

  it('PageFooter throws no accessibillity violations', (done) => {
    const html = shallow(PageFooterAlt).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
