import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import CardDivision from '../CardDivision.vue';

expect.extend(toHaveNoViolations);

describe('CardDivision', () => {
  it('should match snapshot', () => {
    const result = shallow(CardDivision, {
      propsData: {
        name: 'mock test',
        href: 'www.unimelb.edu.au',
      },
    }).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(CardDivision, {
      propsData: {
        name: 'mock test',
        href: 'www.unimelb.edu.au',
      },
    }).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
