import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import CardBioHeader from '../CardBioHeader.vue';

expect.extend(toHaveNoViolations);

describe('CardBioHeader', () => {
  it('should match snapshot', () => {
    const result = shallow(CardBioHeader).element;
    expect(result).toMatchSnapshot();
  });
});
