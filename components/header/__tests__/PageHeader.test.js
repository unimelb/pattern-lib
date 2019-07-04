import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import PageHeader from '../PageHeader.vue';

expect.extend(toHaveNoViolations);

describe('PageHeader', () => {
  it('should match snapshot', () => {
    const result = shallow(PageHeader, {
      propsData: {
        title: '',
        img: '',
      },
    }).element;
    expect(result).toMatchSnapshot();
  });
});
