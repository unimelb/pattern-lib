import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import ButtonIcon from '../ButtonIcon.vue';

expect.extend(toHaveNoViolations);

describe('ButtonIcon', () => {
  it('should match snapshot', () => {
    const result = shallow(ButtonIcon).element;
    expect(result).toMatchSnapshot();
  });
});
