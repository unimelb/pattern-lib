import { shallow } from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import PageFooter from '../PageFooter.vue';

expect.extend(toHaveNoViolations);

describe('PageFooter', () => {
  it('should match snapshot', () => {
    const result = shallow(PageFooter).element;
    expect(result).toMatchSnapshot();
  });

  it('should render an empty div with id named liveagent', () => {
    const wrapper = shallow(PageFooter);
    const result = wrapper.find('[id="liveagent"]');
    expect(result.isEmpty()).toBe(true);
  });

  it('PageFooter thows no accessibillity violations', (done) => {
    const html = shallow(PageFooter).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
