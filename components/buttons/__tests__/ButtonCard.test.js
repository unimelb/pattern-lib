import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import ButtonCard from '../ButtonCard.vue';

expect.extend(toHaveNoViolations);

describe('ButtonCard', () => {
  it('should match snapshot', () => {
    const result = shallow(ButtonCard, {
      propsData: {
        label: 'test label',
        link: 'www.unimelb.edu.au',
      },
    }).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(ButtonCard, {
      propsData: {
        label: 'test label',
        link: 'www.unimelb.edu.au',
      },
    }).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
