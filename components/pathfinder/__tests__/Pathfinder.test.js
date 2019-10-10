import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import Pathfinder from '../Pathfinder.vue';

expect.extend(toHaveNoViolations);

describe('Pathfinder', () => {
  it('should match snapshot', () => {
    const result = shallow(Pathfinder).element;
    expect(result).toMatchSnapshot();
  });
});
