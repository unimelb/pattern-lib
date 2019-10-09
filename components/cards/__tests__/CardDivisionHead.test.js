import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import CardDivisionHead from '../CardDivisionHead.vue';

expect.extend(toHaveNoViolations);

describe('CardDivisionHead', () => {
  it('should match snapshot', () => {
    const result = shallow(CardDivisionHead).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(CardDivisionHead).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
