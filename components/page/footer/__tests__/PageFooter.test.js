import { mount, shallow } from 'vue-test-utils';
import PageFooter from '../PageFooter.vue';

describe('PageFooter', () => {
  it('should match snapshot', () => {
    expect(mount(PageFooter).element).toMatchSnapshot();
  });
  it('should render an empty div with id named liveagent', () => {
    const wrapper = shallow(PageFooter);
    const result = wrapper.find('[id="liveagent"]');
    expect(result.isEmpty()).toBe(true);
  });
});
