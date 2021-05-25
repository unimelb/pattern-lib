import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import PageHeaderHome from '../PageHeaderHome.vue';

expect.extend(toHaveNoViolations);

describe('PageHeaderHome', () => {
  it('should match snapshot', () => {
    const result = shallow(PageHeaderHome, {
      propsData: {
        title: 'mock title',
      },
    }).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(PageHeaderHome, {
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
