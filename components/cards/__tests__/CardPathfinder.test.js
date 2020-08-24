import {
  mount,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import CardPathfinder from '../CardPathfinder.vue';

expect.extend(toHaveNoViolations);

describe('CardPathfinder', () => {
  it('should match snapshot', () => {
    const result = mount(CardPathfinder).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = mount(CardPathfinder, {
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
