import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import PageHeaderEvent from '../PageHeaderEvent.vue';

expect.extend(toHaveNoViolations);

describe('PageHeaderEvent', () => {
  it('should match snapshot', () => {
    const result = shallow(PageHeaderEvent, {
      propsData: {
        titleText: 'title text',
      },
    }).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(PageHeaderEvent).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
