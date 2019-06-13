
import { shallow } from 'vue-test-utils';
import { toHaveNoViolations } from 'jest-axe';
import TableResponsive from '../TableResponsive.vue';

expect.extend(toHaveNoViolations);

describe('Responsive Table', () => {
  it('should match snapshot', () => {
    const result = shallow(TableResponsive).element;
    expect(result).toMatchSnapshot();
  });
});
