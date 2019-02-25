import {
  mount,
} from 'vue-test-utils';
import InPageNavigation from '../InPageNavigation.vue';

describe('mounting component with simple props', () => {
  let component;

  beforeEach(() => {
    component = mount(InPageNavigation, {
      propsData: {
        title: 'test',
        headingLevel: 'h2',
      },
    });
  });

  it('should render title `test`', () => {
    const elems = component.findAll('h2');
    expect(elems.at(0).text()).toContain('test');
  });
});
