import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import CardImageList from '../CardImageList.vue';

expect.extend(toHaveNoViolations);

describe('CardImageList', () => {
  it('should match snapshot', () => {
    const result = shallow(CardImageList).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(CardImageList).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
