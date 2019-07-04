import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import CardNews from '../CardNews.vue';

expect.extend(toHaveNoViolations);

describe('CardNews', () => {
  it('should match snapshot', () => {
    const result = shallow(CardNews).element;
    expect(result).toMatchSnapshot();
  });
});
