import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import ListingWrap from '../ListingWrap.vue';

expect.extend(toHaveNoViolations);

describe('ListingWrap', () => {
  it('should match snapshot', () => {
    const result = shallow(ListingWrap).element;
    expect(result).toMatchSnapshot();
  });
});
