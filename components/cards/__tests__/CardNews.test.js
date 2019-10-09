import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import CardNews from '../CardNews.vue';

expect.extend(toHaveNoViolations);

describe('CardNews', () => {
  it('should match snapshot', () => {
    const result = shallow(CardNews).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(CardNews).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
