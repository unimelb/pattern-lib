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

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(PhotoSwipeMarkup).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
