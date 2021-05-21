import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import SectionImage from '../SectionImage.vue';

expect.extend(toHaveNoViolations);

const componentOptions = {
  slots: {
    default: '<h2 class="heading-md">Mock heading</h2><p>Mock text</p>',
  },
};

describe('SectionImage', () => {
  it('should match snapshot', () => {
    const result = shallow(SectionImage, componentOptions).element;

    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(SectionImage, componentOptions).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
