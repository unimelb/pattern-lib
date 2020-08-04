import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import TodoList from '../TodoList.vue';

expect.extend(toHaveNoViolations);

describe('TodoList', () => {
  it('should match snapshot', () => {
    const result = shallow(TodoList).element;
    expect(result).toMatchSnapshot();
  });
});
