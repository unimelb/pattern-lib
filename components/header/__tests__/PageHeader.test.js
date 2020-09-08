import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
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

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(PageHeader, {
      propsData: {
        title: 'mock title',
      },
    }).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
