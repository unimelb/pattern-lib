import { shallow } from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import Tags from '../Tags.vue';

expect.extend(toHaveNoViolations);

describe('Tags', () => {
  it('should match snapshot', () => {
    const result = shallow(Tags).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(Tags).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
