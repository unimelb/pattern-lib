import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import SectionTwoCol from '../SectionTwoCol.vue';

expect.extend(toHaveNoViolations);

describe('SectionTwoCol', () => {
  it('should match snapshot', () => {
    const result = shallow(SectionTwoCol).element;
    expect(result).toMatchSnapshot();
  });
});
