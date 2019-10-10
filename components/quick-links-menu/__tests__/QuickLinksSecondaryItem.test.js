import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import QuickLinksSecondaryItem from '../QuickLinksSecondaryItem.vue';

expect.extend(toHaveNoViolations);

describe('QuickLinksSecondaryItem', () => {
  it('should match snapshot', () => {
    const result = shallow(QuickLinksSecondaryItem).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(QuickLinksSecondaryItem).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
