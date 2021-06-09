import { shallow } from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import Sidebar from '../Sidebar.vue';

expect.extend(toHaveNoViolations);

describe('Sidebar', () => {
  it('should match snapshot', () => {
    const result = shallow(Sidebar, {
      propsData: {
        title: 'mock title',
      },
    }).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(Sidebar, {
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
