import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import ContentBlock from '../ContentBlock.vue';

expect.extend(toHaveNoViolations);

describe('ContentBlock', () => {
  it('should match snapshot', () => {
    const result = shallow(ContentBlock).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(ContentBlock).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
