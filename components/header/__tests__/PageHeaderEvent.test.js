import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import PageHeaderEvent from '../PageHeaderEvent.vue';

expect.extend(toHaveNoViolations);

describe('PageHeaderEvent', () => {
  it('should match snapshot', () => {
    const result = shallow(PageHeaderEvent).element;
    expect(result).toMatchSnapshot();
  });
});
