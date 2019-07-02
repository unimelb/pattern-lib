import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import PageHeaderMin from '../PageHeaderMin.vue';

expect.extend(toHaveNoViolations);

describe('PageHeaderMin', () => {
  it('should match snapshot', () => {
    const result = shallow(PageHeaderMin).element;
    expect(result).toMatchSnapshot();
  });
});
