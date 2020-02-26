import { mount, shallow } from 'vue-test-utils';

import FilteredResults from '../FilteredResults.vue';

const mockData = [{
  id: 'key1',
  type: 'major',
  name: 'Some category name',
}, {
  id: 'key2',
  type: 'minor',
  name: 'Some category name',
}, {
  id: 'key3',
  type: 'major',
  name: 'Some category name',
}, {
  id: 'key4',
  type: 'major',
  name: 'Some category name',
}, {
  id: 'key5',
  type: 'minor',
  name: 'Some category name',
}, {
  id: 'key6',
  type: 'major',
  name: 'Some category name',
}];

describe('FilteredResults', () => {
  it('Should match snapshot: has results', () => {
    const result = mount(FilteredResults,
      {
        propsData: {
          items: mockData,
          callback: () => false,
          filters: [],
        },
      }).element;
    expect(result).toMatchSnapshot();
  });

  it('Should match snapshot: no results', () => {
    const result = mount(FilteredResults,
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
    const result = shallow(FilteredResults);
    const {
      items,
      filters,
      callback,
    } = result.vm.$options.props;
    expect(items.type).toBe(Array);
    expect(filters.type).toBe(Array);
    expect(callback.type).toBe(Function);
  });

});
