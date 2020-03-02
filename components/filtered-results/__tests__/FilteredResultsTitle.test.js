import { mount, shallow } from 'vue-test-utils';

import FilteredResultsTitle from '../FilteredResultsTitle.vue';

describe('FilteredResultsTitle', () => {
  it('Should match snapshot: has results', () => {
    const result = mount(FilteredResultsTitle,
      {
        propsData: {
          message: '10 results found with <strong>2</strong> filters applied.',
        },
      }).element;
    expect(result).toMatchSnapshot();
  });

  it('Should match snapshot: has results with 1 filter', () => {
    const result = mount(FilteredResultsTitle,
      {
        propsData: {
          callback: () => false,
          message: '10 results found with <strong>1</strong> filter applied.',
          secondaryMessage: 'Some secondary text',
        },
      }).element;
    expect(result).toMatchSnapshot();
  });

  it('Should match snapshot: no results', () => {
    const result = mount(FilteredResultsTitle,
      {
        propsData: {
        },
      }).element;
    expect(result).toMatchSnapshot();
  });

  it('Should have default props and correct types', () => {
    const result = shallow(FilteredResultsTitle);
    const {
      message,
      secondaryMessage,
      callback,
    } = result.vm.$options.props;
    expect(message.type).toBe(String);
    expect(callback.type).toBe(Function);
    expect(secondaryMessage.type).toBe(String);
  });

  it('Should trigger callback function', () => {
    const wrapper = shallow(FilteredResultsTitle,
      {
        propsData: {
          callback: jest.fn(),
          message: 'Results found',
          secondaryMessage: 'Text to click',
        },
      });
    wrapper.find('.filtered-results__title-notice').trigger('click', {});
    expect(wrapper.vm.$props.callback).toHaveBeenCalled();
  });

});
