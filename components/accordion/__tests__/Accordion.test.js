import {
  mount,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import Accordion from '../Accordion.vue';

expect.extend(toHaveNoViolations);

describe('Accordion', () => {
  it('should match snapshot', () => {
    const result = mount(Accordion, {
      propsData: {
        name: 'title',
      },
    }).element;

    expect(result).toMatchSnapshot();
  });

  it('My Component throws no accessibility violations', (done) => {
    const html = mount(Accordion, {
      propsData: {
        name: 'title',
      },
    }).html();

    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
