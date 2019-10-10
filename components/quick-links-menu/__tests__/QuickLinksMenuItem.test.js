import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import QuickLinksMenuItem from '../QuickLinksMenuItem.vue';

expect.extend(toHaveNoViolations);

describe('QuickLinksMenuItem', () => {
  it('should match snapshot', () => {
    const result = shallow(QuickLinksMenuItem).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(QuickLinksMenuItem, {
      propsData: {
        href: 'www.unimelb.edu.au',
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
