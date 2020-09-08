import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import PageCampaignCards from '../PageCampaignCards.vue';

expect.extend(toHaveNoViolations);

describe('PageCampaignCards', () => {
  it('should match snapshot', () => {
    const result = shallow(PageCampaignCards).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(PageCampaignCards).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
