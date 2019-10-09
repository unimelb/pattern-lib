import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import CardFacts from '../CardFacts.vue';

expect.extend(toHaveNoViolations);

describe('CardFacts', () => {
  it('should match snapshot', () => {
    const result = shallow(CardFacts).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(CardFacts).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
