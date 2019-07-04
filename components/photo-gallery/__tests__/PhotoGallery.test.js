import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import PhotoGallery from '../PhotoGallery.vue';

expect.extend(toHaveNoViolations);

describe('PhotoGallery', () => {
  it.skip('should match snapshot', () => {
    const result = shallow(PhotoGallery).element;
    expect(result).toMatchSnapshot();
  });
});
