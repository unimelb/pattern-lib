import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import FullWidthImage from '../FullWidthImage.vue';

expect.extend(toHaveNoViolations);

describe('FullWidthImage', () => {
  it('should match snapshot', () => {
    const result = shallow(FullWidthImage).element;
    expect(result).toMatchSnapshot();
  });

  it('should have default props and correct types imageUrl', () => {
    const wrapper = shallow(FullWidthImage);
    const {
      imageUrl,
    } = wrapper.vm.$options.props;

    expect(imageUrl.type).toBe(String);
    expect(wrapper.props().imageUrl).toBe('');
  });
});
