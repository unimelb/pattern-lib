import { mount, shallow } from 'vue-test-utils';

import FilteredResults from '../FilteredResults.vue';

describe('FilteredResults', () => {
  it('Should match snapshot: has results, has only message prop', () => {
    const result = mount(FilteredResults,
      {
        propsData: {
          items: 10,
          message: '10 results found with <strong>2</strong> filters applied.',
        },
      }).element;
    expect(result).toMatchSnapshot();
  });

  it('Should match snapshot: has results, has message and secondary message props', () => {
    const result = mount(FilteredResults,
      {
        propsData: {
          items: 10,
          message: '10 results found with <strong>2</strong> filters applied.',
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
          callback: () => false,
        },
      }).element;
    expect(result).toMatchSnapshot();
  });

  it('Should have default props and correct types', () => {
    const result = shallow(FilteredResults);
    const {
      items,
      message,
      secondaryMessage,
      callback,
    } = result.vm.$options.props;
    expect(items.type).toBe(Number);
    expect(message.type).toBe(String);
    expect(callback.type).toBe(Function);
    expect(secondaryMessage.type).toBe(String);
  });

});
