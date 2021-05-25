import { shallow } from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import MegaMenuAltMobile from '../MegaMenuAltMobile.vue';

expect.extend(toHaveNoViolations);

describe('MegaMenuAltMobile', () => {
  it('should match snapshot', () => {
    const result = shallow(MegaMenuAltMobile).element;

    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(MegaMenuAltMobile).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
