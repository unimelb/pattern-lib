import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import ListItem from '../ListItem.vue';

expect.extend(toHaveNoViolations);

describe('ListItem', () => {
  it('should match snapshot', () => {
    const result = shallow(ListItem).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(ListItem).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
