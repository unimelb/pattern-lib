import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import PageHeaderCampaign from '../PageHeaderCampaign.vue';

expect.extend(toHaveNoViolations);

describe('PageHeaderCampaign', () => {
  it('should match snapshot', () => {
    const result = shallow(PageHeaderCampaign).element;
    expect(result).toMatchSnapshot();
  });
});
