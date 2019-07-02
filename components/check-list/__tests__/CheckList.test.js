import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import CheckList from '../CheckList.vue';

expect.extend(toHaveNoViolations);

describe('CheckList', () => {
  it('should match snapshot', () => {
    const result = shallow(CheckList).element;
    expect(result).toMatchSnapshot();
  });
});
