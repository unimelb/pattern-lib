import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import Accordion from '../Accordion.vue';

expect.extend(toHaveNoViolations);

describe('Accordion', () => {
  it('should match snapshot', () => {
    const result = shallow(Accordion).element;
    expect(result).toMatchSnapshot();
  });

  it('My Component throws no accessibility violations', (done) => {
    const html = shallow(Accordion).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
