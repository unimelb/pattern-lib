import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import ScreenReaderJumpTo from '../ScreenReaderJumpTo.vue';

expect.extend(toHaveNoViolations);

describe('ScreenReaderJumpTo', () => {
  it('should match snapshot', () => {
    const result = shallow(ScreenReaderJumpTo, {
      propsData: {
        text: 'Skip',
        toElement: '#id',
      },
    }).element;

    expect(result).toMatchSnapshot();
  });
});
