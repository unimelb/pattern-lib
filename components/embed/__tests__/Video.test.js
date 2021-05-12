import { shallow } from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import Video from '../Video.vue';

expect.extend(toHaveNoViolations);

const poster = {
  src: 'https://picsum.photos/seed/1/540/360',
  alt: '',
};

const video = {
  url: 'https://www.youtube.com/embed/sWHoKq6MSaE',
  duration: 144,
};

describe('Video', () => {
  it('should match snapshot', () => {
    const result = shallow(Video, {
      propsData: {
        poster,
        video,
      },
    }).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(Video, {
      propsData: {
        poster,
        video,
      },
    }).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
