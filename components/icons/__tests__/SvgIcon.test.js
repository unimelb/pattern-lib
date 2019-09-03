import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import SvgIcon from '../SvgIcon.vue';

expect.extend(toHaveNoViolations);

describe('SvgIcon', () => {
  it('should match snapshot', () => {
    const result = shallow(SvgIcon).element;
    expect(result).toMatchSnapshot();
  });
});
