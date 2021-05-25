import {
  mount,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import CardFlat from '../CardFlat.vue';

expect.extend(toHaveNoViolations);

describe('CardFlat', () => {
  it('should match snapshot', () => {
    const result = mount(CardFlat, {
      propsData: {
        title: 'mock title',
      },
    }).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = mount(CardFlat, {
      propsData: {
        title: 'mock title',
      },
    }).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
