import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import QuickLinksAlt from '../QuickLinksAlt.vue';

expect.extend(toHaveNoViolations);

describe('QuickLinks', () => {
  it('should match snapshot', () => {
    const result = shallow(QuickLinksAlt, {
      propsData: {
        items: [
          { href: 'http://www.unimelb.edu.au', title: 'mock title' },
        ],
      },
    }).element;
    expect(result).toMatchSnapshot();
  });

  it('should match snapshot', () => {
    const result = shallow(QuickLinksAlt, {
      propsData: {
        items: [
          { href: 'http://www.unimelb.edu.au', title: 'mock title' },
        ],
      },
    }).element;
    expect(result).toMatchSnapshot();
  });

  it('should have role of button when action prop present', () => {
    const wrapper = shallow(QuickLinksAlt, {
      propsData: {
        items: [
          { href: 'http://www.unimelb.edu.au', title: 'mock title', action: () => console.log('Click') }, // eslint-disable-line no-console
        ],
      },
    });
    expect(wrapper.props().items.length).toBe(1);
    expect(wrapper.find('.quick-links-alt__link').attributes().role).toBe('button');
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(QuickLinksAlt, {
      propsData: {
        items: [
          { href: 'http://www.unimelb.edu.au', title: 'mock title' },
        ],
      },
    }).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
