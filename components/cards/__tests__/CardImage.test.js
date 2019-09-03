import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import CardImage from '../CardImage.vue';

expect.extend(toHaveNoViolations);

describe('CardImage', () => {
  it('should match snapshot', () => {
    const result = shallow(CardImage).element;
    expect(result).toMatchSnapshot();
  });
});
