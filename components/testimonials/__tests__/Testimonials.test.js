import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import Testimonials from '../Testimonials.vue';

expect.extend(toHaveNoViolations);

describe('Testimonials', () => {
  it('should match snapshot', () => {
    const result = shallow(Testimonials, {
      propsData: {
        name: '',
        year: '',
        testimonials: '',
      },
    }).element;

    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(Testimonials).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
