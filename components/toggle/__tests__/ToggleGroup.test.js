import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import ToggleGroup from '../ToggleGroup.vue';

expect.extend(toHaveNoViolations);

describe('ToggleGroup', () => {
  it('should match snapshot', () => {
    const result = shallow(ToggleGroup).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(ToggleGroup).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
