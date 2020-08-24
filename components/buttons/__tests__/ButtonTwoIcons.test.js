import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import ButtonTwoIcons from '../ButtonTwoIcons.vue';

expect.extend(toHaveNoViolations);

describe('ButtonTwoIcons', () => {
  it('should match snapshot', () => {
    const result = shallow(ButtonTwoIcons).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(ButtonTwoIcons, {
      propsData: {
        href: 'www.unimelb.edu.au',
      },
    }).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
