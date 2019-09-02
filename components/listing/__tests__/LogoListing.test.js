import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import LogoListing from '../LogoListing.vue';


expect.extend(toHaveNoViolations);

describe('LogoListing', () => {
  it('should match snapshot', () => {
    const result = shallow(LogoListing).element;
    expect(result).toMatchSnapshot();
  });
});
