import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import InlineSearch from '../InlineSearch.vue';

expect.extend(toHaveNoViolations);

describe('InlineSearch', () => {
  it('should match snapshot', () => {
    const result = shallow(InlineSearch, {
      propsData: {
        id: 'search',
        label: 'text',
      },
    }).element;

    expect(result).toMatchSnapshot();
  });

  it('should render label', () => {
    const wrapper = shallow(InlineSearch, {
      propsData: {
        id: 'search',
        label: 'text',
      },
    });

    expect(wrapper.find('label').text()).toBe('text');
    expect(wrapper.find('label').exists()).toBe(true);
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(InlineSearch, {
      propsData: {
        id: 'search',
        label: 'text',
      },
    }).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
