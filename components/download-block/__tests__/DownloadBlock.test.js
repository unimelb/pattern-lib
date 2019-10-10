import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import DownloadBlock from '../DownloadBlock.vue';

expect.extend(toHaveNoViolations);

describe('DownloadBlock', () => {
  it('should match snapshot', () => {
    const result = shallow(DownloadBlock, {
      propsData: {
        href: '',
        header: '',
        img: '',
        size: '',
        format: '',
      },
    }).element;
    expect(result).toMatchSnapshot();
  });
});
