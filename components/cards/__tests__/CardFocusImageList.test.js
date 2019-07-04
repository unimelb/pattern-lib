import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import CardFocusImageList from '../CardFocusImageList.vue';

expect.extend(toHaveNoViolations);

describe('CardFocusImageList', () => {
  it('should match snapshot', () => {
    const result = shallow(CardFocusImageList).element;
    expect(result).toMatchSnapshot();
  });
});
