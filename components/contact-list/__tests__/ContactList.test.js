import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import ContactList from '../ContactList.vue';

expect.extend(toHaveNoViolations);

describe('ContactList', () => {
  it('should match snapshot', () => {
    const result = shallow(ContactList).element;
    expect(result).toMatchSnapshot();
  });
});
