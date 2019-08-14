import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import PageSearch from '../PageSearch.vue';

expect.extend(toHaveNoViolations);

describe('PageSearch', () => {
  it.skip('should match snapshot', () => {
    const result = shallow(PageSearch).element;
    expect(result).toMatchSnapshot();
  });
});
