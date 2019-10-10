import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import Enquiry from '../Enquiry.vue';

expect.extend(toHaveNoViolations);

describe('Enquiry', () => {
  it('should match snapshot', () => {
    const result = shallow(Enquiry).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(Enquiry).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
