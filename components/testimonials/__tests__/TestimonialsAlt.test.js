import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import TestimonialsAlt from '../TestimonialsAlt.vue';

expect.extend(toHaveNoViolations);

describe('TestimonialsAlt', () => {
  it('should match snapshot', () => {
    const result = shallow(TestimonialsAlt, {
      propsData: {
        title: 'Taking this course gave me so many relevant new skills',
        name: 'Simi Chopra',
        imgSrc: 'https://randomuser.me/api/portraits/lego/1.jpg',
      },
    }).element;

    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(TestimonialsAlt).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
