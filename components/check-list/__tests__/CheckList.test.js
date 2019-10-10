import { shallow } from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import CheckList from '../CheckList.vue';

expect.extend(toHaveNoViolations);

const mockSlot = '<ol slot="list"><li>I agree to this term</li></ol><a slot="btn" href="/">Continue</a>';

describe('CheckList', () => {
  it.skip('should match snapshot', () => {
    const result = shallow(CheckList, {
      slots: {
        mockSlot,
      },
    }).element;
    expect(result).toMatchSnapshot();
  });

  it.skip('Component throws no accessibility violations', (done) => {
    const html = shallow(CheckList).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
