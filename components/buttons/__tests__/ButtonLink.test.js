import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import ButtonLink from '../ButtonLink.vue';

expect.extend(toHaveNoViolations);

describe('ButtonLink', () => {
  it('should match snapshot', () => {
    const result = shallow(ButtonLink).element;
    expect(result).toMatchSnapshot();
  });
});
