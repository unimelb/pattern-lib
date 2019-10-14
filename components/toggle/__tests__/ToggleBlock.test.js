import {
  shallow, mount,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import ToggleBlock from '../ToggleBlock.vue';

expect.extend(toHaveNoViolations);

describe('ToggleBlock', () => {
  it.skip('should match snapshot', () => {
    const result = shallow(ToggleBlock).element;
    expect(result).toMatchSnapshot();
  });

  it.skip('Component throws no accessibility violations', (done) => {
    const html = mount(ToggleBlock, {
      parent: '<h1>test</h1>',
    }).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
