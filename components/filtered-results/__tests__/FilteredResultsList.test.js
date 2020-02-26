import { mount, shallow } from 'vue-test-utils';

import FilteredResultsList from '../FilteredResultsList.vue';

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

describe('FilteredResultsList', () => {
  it('Should match snapshot: has results', () => {
    const result = mount(FilteredResultsList,
      {
        propsData: {
          items: mockData,
        },
      }).element;
    expect(result).toMatchSnapshot();
  });

  it('Should match snapshot: no results', () => {
    const result = mount(FilteredResultsList,
      {
        propsData: {
          items: [],
        },
      }).element;
    expect(result).toMatchSnapshot();
  });

  it('Should have default props and correct types', () => {
    const result = shallow(FilteredResultsList);
    const {
      items,
    } = result.vm.$options.props;
    expect(items.type).toBe(Array);
  });
});
