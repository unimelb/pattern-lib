import { mount, shallow } from 'vue-test-utils';

import FilteredResultsTitle from '../FilteredResultsTitle.vue';

const mockData = [{
  id: 'key1',
  type: 'major',
  name: 'Some category name',
}];

describe('FilteredResultsTitle', () => {
  it('Should match snapshot: has results', () => {
    const result = mount(FilteredResultsTitle,
      {
        propsData: {
          items: mockData,
          callback: () => false,
          filters: [],
        },
      }).element;
    expect(result).toMatchSnapshot();
  });

  it('Should match snapshot: has results with 1 filter', () => {
    const result = mount(FilteredResultsTitle,
      {
        propsData: {
          items: mockData,
          callback: () => false,
          filters: ['undergrad'],
        },
      }).element;
    expect(result).toMatchSnapshot();
  });

  it('Should match snapshot: has results with > 1 filter', () => {
    const result = mount(FilteredResultsTitle,
      {
        propsData: {
          items: mockData,
          callback: () => false,
          filters: ['undergrad', 'postgrad'],
        },
      }).element;
    expect(result).toMatchSnapshot();
  });

  it('Should match snapshot: no results', () => {
    const result = mount(FilteredResultsTitle,
      {
        propsData: {
          items: [],
          callback: () => false,
          filters: [],
        },
      }).element;
    expect(result).toMatchSnapshot();
  });

  it('Should have default props and correct types', () => {
    const result = shallow(FilteredResultsTitle);
    const {
      items,
      filters,
      callback,
    } = result.vm.$options.props;
    expect(items.type).toBe(Array);
    expect(filters.type).toBe(Array);
    expect(callback.type).toBe(Function);
  });

  it('Should trigger callback function', () => {
    const wrapper = shallow(FilteredResultsTitle,
      {
        propsData: {
          items: [],
          callback: jest.fn(),
          filters: [],
        },
      });
    wrapper.find('.filtered-results__title-notice').trigger('click', {});
    expect(wrapper.vm.$props.callback).toHaveBeenCalled();
  });

});
