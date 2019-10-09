import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import ButtonIcon from '../ButtonIcon.vue';

expect.extend(toHaveNoViolations);

describe('ButtonIcon', () => {
  it('should match snapshot', () => {
    const result = shallow(ButtonIcon).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(ButtonIcon, {
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
});
