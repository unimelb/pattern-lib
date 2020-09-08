import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import SectionDivider from '../SectionDivider.vue';

expect.extend(toHaveNoViolations);

describe('SectionDivider', () => {
  it('should match snapshot', () => {
    const result = shallow(SectionDivider, {
      propsData: {
        title: '',
      },
    }).element;

    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(SectionDivider, {
      propsData: {
        title: 'mock title',
      },
    }).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
