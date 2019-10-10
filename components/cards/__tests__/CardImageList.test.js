import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import CardImageList from '../CardImageList.vue';

expect.extend(toHaveNoViolations);

describe('CardImageList', () => {
  it('should match snapshot', () => {
    const result = shallow(CardImageList).element;
    expect(result).toMatchSnapshot();
  });
});
