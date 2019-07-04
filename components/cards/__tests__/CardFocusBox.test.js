import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import CardFocusBox from '../CardFocusBox.vue';

expect.extend(toHaveNoViolations);

describe('CardFocusBox', () => {
  it('should match snapshot', () => {
    const result = shallow(CardFocusBox).element;
    expect(result).toMatchSnapshot();
  });
});
