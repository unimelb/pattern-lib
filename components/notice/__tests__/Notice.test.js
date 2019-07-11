import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import Notice from '../Notice.vue';

expect.extend(toHaveNoViolations);

describe('Notice', () => {
  it('should match snapshot', () => {
    const result = shallow(Notice).element;
    expect(result).toMatchSnapshot();
  });
});
