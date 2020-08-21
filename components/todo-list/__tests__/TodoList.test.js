import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import TodoList from '../TodoList.vue';

expect.extend(toHaveNoViolations);

describe('TodoList', () => {
  it('should match snapshot', () => {
    const result = shallow(TodoList).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(TodoList).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
