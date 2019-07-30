import { shallow } from 'vue-test-utils';
import { toHaveNoViolations } from 'jest-axe';
import EventInfo from '../EventInfo.vue';

expect.extend(toHaveNoViolations);


describe('EventInfo', () => {
  it('should match snapshot', () => {
    const result = shallow(EventInfo).element;
    expect(result).toMatchSnapshot();
  });
});
