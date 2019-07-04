import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import CardDivisionHead from '../CardDivisionHead.vue';

expect.extend(toHaveNoViolations);

describe('CardDivisionHead', () => {
  it('should match snapshot', () => {
    const result = shallow(CardDivisionHead).element;
    expect(result).toMatchSnapshot();
  });
});
