import { mount, shallow } from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import Dropdown from '../Dropdown.vue';

expect.extend(toHaveNoViolations);

describe('Dropdown', () => {
  it('should match snapshot', () => {
    const result = mount(Dropdown,
      {
        propsData: {
          values: [],
        },
      }).element;
    expect(result).toMatchSnapshot();
  });

  it('should have default props and correct types callback/selectedItem', () => {
    const wrapper = shallow(Dropdown);
    const {
      callback,
      selectedItem,
    } = wrapper.vm.$options.props;

    expect(callback.type).toBe(Function);

    expect(selectedItem.type).toEqual([String, Boolean]);
    expect(wrapper.props().selectedItem).toBe(false);
  });

  it('should render select tag', () => {
    const wrapper = shallow(Dropdown, {
      propsData: {
        values: [],
      },
    });
    expect(wrapper.find('select').exists()).toBe(true);
  });

  it('should render options', () => {
    const wrapper = shallow(Dropdown, {
      propsData: {
        values: ['test'],
      },
    });
    expect(wrapper.find('option').exists()).toBe(true);
    expect(wrapper.find('option').text()).toBe('test');
  });

  it('should render options label if provided', () => {
    const wrapper = shallow(Dropdown, {
      propsData: {
        values: [{
          label: 'label',
          value: 'value',
        }],
      },
    });
    expect(wrapper.find('option').text()).toBe('label');
  });

  it('should render options value if provided', () => {
    const wrapper = shallow(Dropdown, {
      propsData: {
        values: [{
          label: 'label',
          value: 'value',
        }],
      },
    });
    expect(wrapper.find('option').attributes().value).toBe('value');
  });

  it('should have selected option if provided', () => {
    const wrapper = shallow(Dropdown, {
      propsData: {
        values: [{
          label: 'label',
          value: 'value selected',
        }],
        selectedItem: 'value selected',
      },
    });
    expect(wrapper.vm.selected).toBe('value selected');
  });

  it('should fire callback if provided', () => {
    const wrapper = shallow(Dropdown, {
      propsData: {
        values: [{
          label: 'label1',
          value: 'value1',
        },
        {
          label: 'label2',
          value: 'value selected2',
        }],
        selectedItem: 'value1',
        callback: jest.fn(),
      },
    });
    wrapper.find('select').trigger('change');
    expect(wrapper.vm.callback).toHaveBeenCalledTimes(1);
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(Dropdown).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
