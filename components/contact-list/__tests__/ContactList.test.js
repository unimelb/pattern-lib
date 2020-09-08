import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import ContactList from '../ContactList.vue';

expect.extend(toHaveNoViolations);

describe('ContactList', () => {
  it('should match snapshot', () => {
    const result = shallow(ContactList).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(ContactList).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
