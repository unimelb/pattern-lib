import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import ButtonLink from '../ButtonLink.vue';

expect.extend(toHaveNoViolations);

describe('ButtonLink', () => {
  it('should match snapshot', () => {
    const result = shallow(ButtonLink).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations a tag', (done) => {
    const html = shallow(ButtonLink, {
      propsData: {
        href: 'www.unimelb.edu.au',
      },
      slots: {
        default: '<h2>test</h2>',
      },
    }).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });

  it('Component throws no accessibility violations button', (done) => {
    const html = shallow(ButtonLink, {
      propsData: {
        element: 'button',
      },
      slots: {
        default: '<h2>test</h2>',
      },
    }).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
