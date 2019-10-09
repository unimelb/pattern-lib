import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import StyledSelect from '../StyledSelect.vue';

expect.extend(toHaveNoViolations);

describe('StyledSelect', () => {
  it('should match snapshot', () => {
    const result = shallow(StyledSelect, {
      propsData: {
        label: 'text',
      },
    }).element;

    expect(result).toMatchSnapshot();
  });

  it('should show label', () => {
    const wrapper = shallow(StyledSelect, {
      propsData: {
        label: 'text',
      },
    });

    expect(wrapper.find('.styled-select__label').text()).toBe('text');
    expect(wrapper.find('.styled-select__label').exists()).toBe(true);
  });
  
  it('Component throws no accessibility violations', (done) => {
    const html = shallow(StyledSelect).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
