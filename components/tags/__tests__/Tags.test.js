import { shallow } from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import Tags from '../Tags.vue';

expect.extend(toHaveNoViolations);


describe('Tags', () => {
  it('should match snapshot', () => {
    const result = shallow(Tags).element;
    expect(result).toMatchSnapshot();
  });
});
