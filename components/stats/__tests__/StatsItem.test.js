import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import StatsItem from '../StatsItem.vue';

expect.extend(toHaveNoViolations);

describe('StatsItem', () => {
  it('should match snapshot', () => {
    const result = shallow(StatsItem, {
      propsData: {
        number: '',
        meta: '',
        icon: '',
      },
    }).element;

    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(StatsItem).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
