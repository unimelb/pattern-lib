import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import ModalDialog from '../ModalDialog.vue';

expect.extend(toHaveNoViolations);

describe('ModalDialog', () => {
  it('should match snapshot', () => {
    const result = shallow(ModalDialog).element;
    expect(result).toMatchSnapshot();
  });
});
