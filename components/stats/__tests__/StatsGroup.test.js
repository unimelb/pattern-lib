import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import StatsGroup from '../StatsGroup.vue';

expect.extend(toHaveNoViolations);

describe('StatsGroup', () => {
  it('should match snapshot', () => {
    const result = shallow(StatsGroup).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(StatsGroup).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
