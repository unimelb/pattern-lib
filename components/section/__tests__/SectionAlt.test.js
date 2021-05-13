import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import SectionAlt from '../SectionAlt.vue';

expect.extend(toHaveNoViolations);

const componentOptions = {
  slots: {
    left: '<h2 class="heading-md">Mock heading</h2>',
    default: '<p>Mock text</p>',
  },
};

describe('SectionAlt', () => {
  it('should match snapshot', () => {
    const result = shallow(SectionAlt, componentOptions).element;

    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(SectionAlt, componentOptions).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
