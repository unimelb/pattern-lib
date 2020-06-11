import { mount, shallow } from 'vue-test-utils';

import FilteredResultsTitle from '../FilteredResultsTitle.vue';

describe('FilteredResultsTitle', () => {
  it('Should match snapshot: has results', () => {
    const result = mount(FilteredResultsTitle,
      {
        propsData: {
          items: 10,
          filters: 0,
        },
      }).element;
    expect(result).toMatchSnapshot();
  });

  it('Should match snapshot: has results with 1 filter', () => {
    const result = mount(FilteredResultsTitle,
      {
        propsData: {
          callback: () => false,
          items: 10,
          filters: 1,
          secondaryMessage: 'Some secondary text',
        },
      }).element;
    expect(result).toMatchSnapshot();
  });

  it('Should match snapshot: no results', () => {
    const result = mount(FilteredResultsTitle,
      {
        propsData: {
          items: 0,
          filters: 0,
        },
      }).element;
    expect(result).toMatchSnapshot();
  });

  it('Should have default props and correct types', () => {
    const result = shallow(FilteredResultsTitle);
    const {
      items,
      filters,
      secondaryMessage,
      callback,
    } = result.vm.$options.props;
    expect(items.type).toBe(Number);
    expect(filters.type).toBe(Number);
    expect(callback.type).toBe(Function);
    expect(secondaryMessage.type).toBe(String);
  });

  it('Should trigger callback function', () => {
    const wrapper = shallow(FilteredResultsTitle,
      {
        propsData: {
          callback: jest.fn(),
          items: 10,
          filters: 1,
          secondaryMessage: 'Text to click',
        },
      });
    wrapper.find('.filtered-results__title-notice').trigger('click', {});
    expect(wrapper.vm.$props.callback).toHaveBeenCalled();
  });
});
