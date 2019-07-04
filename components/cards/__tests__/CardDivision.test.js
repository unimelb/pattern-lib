import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import CardDivision from '../CardDivision.vue';

expect.extend(toHaveNoViolations);

describe('CardDivision', () => {
  it('should match snapshot', () => {
    const result = shallow(CardDivision).element;
    expect(result).toMatchSnapshot();
  });
});
