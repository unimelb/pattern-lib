import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import CardImage from '../CardImage.vue';

expect.extend(toHaveNoViolations);

describe('CardImage', () => {
  it('should match snapshot', () => {
    const result = shallow(CardImage, {
      propsData: {
        title: 'mock title',
        href: 'www.unimelb.edu.au',
      },
    }).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(CardImage, {
      propsData: {
        title: 'mock title',
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
