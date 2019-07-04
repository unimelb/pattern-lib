import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import ContentBlock from '../ContentBlock.vue';

expect.extend(toHaveNoViolations);

describe('ContentBlock', () => {
  it('should match snapshot', () => {
    const result = shallow(ContentBlock).element;
    expect(result).toMatchSnapshot();
  });
});
