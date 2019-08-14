import { shallow } from 'vue-test-utils';
import { toHaveNoViolations } from 'jest-axe';
import Sidebar from '../Sidebar.vue';

expect.extend(toHaveNoViolations);


describe('Sidebar', () => {
  it('should match snapshot', () => {
    const result = shallow(Sidebar).element;
    expect(result).toMatchSnapshot();
  });
});
