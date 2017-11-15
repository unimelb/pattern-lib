import { mount } from 'vue-test-utils';
import PageFooter from '../PageFooter.vue';

describe('PageFooter', () => {
  it('should match snapshot', () => {
    expect(mount(PageFooter).element).toMatchSnapshot();
  });
});
