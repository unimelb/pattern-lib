import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
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

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(DownloadBlock, {
      propsData: {
        href: 'www.unimelb.edu.au',
        header: 'mock header',
      },
    }).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
