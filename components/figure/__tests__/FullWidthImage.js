import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
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

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(FullWidthImage).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
