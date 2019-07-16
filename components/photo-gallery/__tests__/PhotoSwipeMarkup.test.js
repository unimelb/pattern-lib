import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import PhotoSwipeMarkup from '../PhotoSwipeMarkup.vue';

expect.extend(toHaveNoViolations);

describe('PhotoSwipeMarkup', () => {
  it('should match snapshot', () => {
    const result = shallow(PhotoSwipeMarkup).element;
    expect(result).toMatchSnapshot();
  });
});
