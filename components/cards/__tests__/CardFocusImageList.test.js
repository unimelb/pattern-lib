import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import CardFocusImageList from '../CardFocusImageList.vue';

expect.extend(toHaveNoViolations);

describe('CardFocusImageList', () => {
  it('should match snapshot', () => {
    const result = shallow(CardFocusImageList).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(CardFocusImageList).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
