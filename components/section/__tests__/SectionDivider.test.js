import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import SectionDivider from '../SectionDivider.vue';

expect.extend(toHaveNoViolations);

describe('SectionDivider', () => {
  it('should match snapshot', () => {
    const result = shallow(SectionDivider, {
      propsData: {
        title: '',
      },
    }).element;
    
    expect(result).toMatchSnapshot();
  });
});
