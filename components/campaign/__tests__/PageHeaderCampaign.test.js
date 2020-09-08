import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import PageHeaderCampaign from '../PageHeaderCampaign.vue';

expect.extend(toHaveNoViolations);

describe('PageHeaderCampaign', () => {
  it('should match snapshot', () => {
    const result = shallow(PageHeaderCampaign).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(PageHeaderCampaign).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
