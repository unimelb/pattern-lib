import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import CardPathfinder from '../CardPathfinder.vue';

expect.extend(toHaveNoViolations);

describe('CardPathfinder', () => {
  it('should match snapshot', () => {
    const result = shallow(CardPathfinder).element;
    expect(result).toMatchSnapshot();
  });
});
