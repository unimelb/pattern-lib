import { shallow } from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import MegaMenuAlt from '../MegaMenuAlt.vue';

expect.extend(toHaveNoViolations);

describe('MegaMenuAlt', () => {
  it('should match snapshot', () => {
    const result = shallow(MegaMenuAlt).element;

    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    // Set up our document body
    document.body.innerHTML = '<main id="main">'
        + '</main>';
    const html = shallow(MegaMenuAlt).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
