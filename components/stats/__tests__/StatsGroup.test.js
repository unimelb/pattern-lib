import {
  mount,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import StatsGroup from '../StatsGroup.vue';
import StatsItem from '../StatsItem.vue';

expect.extend(toHaveNoViolations);

describe('StatsGroup', () => {
  it('should match snapshot', () => {
    const result = mount(StatsGroup).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = mount(StatsGroup, {
      slots: { StatsItem },
    }).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
