import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import ListingWrap from '../ListingWrap.vue';

expect.extend(toHaveNoViolations);

describe('ListingWrap', () => {
  it('should match snapshot', () => {
    const result = shallow(ListingWrap).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(ListingWrap).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
