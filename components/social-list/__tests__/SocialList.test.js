import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import SocialListGeneric from '../SocialListGeneric.vue';

expect.extend(toHaveNoViolations);

describe('Social List Generic', () => {
  it('should match snapshot', () => {
    const result = shallow(SocialListGeneric).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(SocialListGeneric).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
