import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import CardFocusBox from '../CardFocusBox.vue';

expect.extend(toHaveNoViolations);

describe('CardFocusBox', () => {
  it('should match snapshot', () => {
    const result = shallow(CardFocusBox).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(CardFocusBox).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
