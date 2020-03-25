import { mount, shallow } from 'vue-test-utils';

import FilteredResults from '../FilteredResults.vue';

describe('FilteredResults', () => {
  it('Should match snapshot: has results, has only items and filters props', () => {
    const result = mount(FilteredResults,
      {
        propsData: {
          items: 10,
          filters: 2,
        },
      }).element;
    expect(result).toMatchSnapshot();
  });

  it('Should match snapshot: has results, has items, filters and secondary message props', () => {
    const result = mount(FilteredResults,
      {
        propsData: {
          items: 10,
          filters: 2,
          secondaryMessage: 'Click here',
        },
      }).element;
    expect(result).toMatchSnapshot();
  });

  it('Should match snapshot: no results', () => {
    const result = mount(FilteredResults,
      {
        propsData: {
          items: 0,
          filters: 0,
          callback: () => false,
        },
      }).element;
    expect(result).toMatchSnapshot();
  });

  it('Should have default props and correct types', () => {
    const result = shallow(FilteredResults);
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
});
