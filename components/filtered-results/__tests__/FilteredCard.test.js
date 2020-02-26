import { mount, shallow } from 'vue-test-utils';

import FilteredCard from '../FilteredCard.vue';

describe('FilteredCard', () => {
  it('Should match snapshot', () => {
    const result = mount(FilteredCard,
      {
        propsData: {
          item: {
            type: 'major',
            name: 'Some category',
          },
        },
      }).element;
    expect(result).toMatchSnapshot();
  });

  it('Should have default prop and correct type', () => {
    const result = shallow(FilteredCard);
    const {
      item,
    } = result.vm.$options.props;
    expect(item.type).toBe(Object);
  });
});
