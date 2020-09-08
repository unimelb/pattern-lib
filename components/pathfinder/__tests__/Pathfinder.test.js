import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import Pathfinder from '../Pathfinder.vue';

expect.extend(toHaveNoViolations);

describe('Pathfinder', () => {
  it('should match snapshot', () => {
    const result = shallow(Pathfinder).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(Pathfinder).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
