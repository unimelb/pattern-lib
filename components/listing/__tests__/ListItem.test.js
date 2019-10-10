import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import ListItem from '../ListItem.vue';

expect.extend(toHaveNoViolations);

describe('ListItem', () => {
  it('should match snapshot', () => {
    const result = shallow(ListItem).element;
    expect(result).toMatchSnapshot();
  });
});
