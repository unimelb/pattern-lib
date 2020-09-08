import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import SublinkMenuItem from '../SublinkMenuItem.vue';

expect.extend(toHaveNoViolations);

describe('SublinkMenuItem', () => {
  it('should match snapshot', () => {
    const result = shallow(SublinkMenuItem, {
      propsData: {
        link: 'www.unimelb.edu.au',
      },
      slots: {
        link: 'mock slot',
      },
    }).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(SublinkMenuItem, {
      propsData: {
        link: 'www.unimelb.edu.au',
      },
      slots: {
        link: 'mock slot',
      },
    }).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
