import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import Accordion from '../Accordion.vue';

expect.extend(toHaveNoViolations);

describe('Accordion', () => {
  it.skip('should match snapshot', () => {
    const result = shallow(Accordion).element;
    expect(result).toMatchSnapshot();
  });
});
