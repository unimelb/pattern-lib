import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import CardFacts from '../CardFacts.vue';

expect.extend(toHaveNoViolations);

describe('CardFacts', () => {
  it('should match snapshot', () => {
    const result = shallow(CardFacts).element;
    expect(result).toMatchSnapshot();
  });
});
