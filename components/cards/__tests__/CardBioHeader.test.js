import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import CardBioHeader from '../CardBioHeader.vue';

expect.extend(toHaveNoViolations);

describe('CardBioHeader', () => {
  it('should match snapshot', () => {
    const result = shallow(CardBioHeader).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(CardBioHeader, {
      propsData: {
        name: 'mock name',
      },
    }).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
