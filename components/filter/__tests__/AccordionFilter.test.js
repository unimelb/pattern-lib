import { mount, shallow } from 'vue-test-utils';

import AccordionFilter from '../accordion/AccordionFilter.vue';

const mockData = [
  {
    name: 'arts',
    semester: 'january',
    location: 'location 1',
    points: 'points 1',
    discipline: 'discipline 1',
    audition: 'audition 1',
    abrod: 'abrod 1',
    overview:
      'Exercitation quis sunt fugiat aute adipisicing nulla pariatur ad et fugiat commodo mollit proident. Esse reprehenderit duis ea fugiat reprehenderit amet proident. Labore consequat dolore incididunt enim qui aute nulla ad magna occaecat ullamco. Ipsum consequat commodo ut ullamco sunt ea aliqua magna elit ea aliquip id quis ex. Voluptate voluptate mollit eu irure ipsum labore laborum sunt dolor dolore est. Nostrud tempor non duis excepteur nulla excepteur cupidatat excepteur et laborum tempor. Sit est sit exercitation deserunt sint incididunt.',
    buttonText: 'Handbook Link',
  },
  {
    name: 'science',
    semester: 'february',
    location: 'location 2',
    points: 'points 2',
    discipline: 'discipline 2',
    audition: 'audition 2',
    abrod: 'abrod 2',
    overview:
      'Exercitation quis sunt fugiat aute adipisicing nulla pariatur ad et fugiat commodo mollit proident. Esse reprehenderit duis ea fugiat reprehenderit amet proident. Labore consequat dolore incididunt enim qui aute nulla ad magna occaecat ullamco. Ipsum consequat commodo ut ullamco sunt ea aliqua magna elit ea aliquip id quis ex. Voluptate voluptate mollit eu irure ipsum labore laborum sunt dolor dolore est. Nostrud tempor non duis excepteur nulla excepteur cupidatat excepteur et laborum tempor. Sit est sit exercitation deserunt sint incididunt.',
    buttonText: 'Handbook Link',
  }];

describe('AccordionFilter', () => {
  it('should match snapshot', () => {
    const result = mount(AccordionFilter,
      {
        propsData: {
          data: mockData,
        },
      }).element;
    expect(result).toMatchSnapshot();
  });

  it('should have default props and correct types data', () => {
    const wrapper = shallow(AccordionFilter);
    const {
      data,
    } = wrapper.vm.$options.props;

    expect(data.type).toBe(Array);
  });

  it('should render accordion list', () => {
    const wrapper = shallow(AccordionFilter, {
      propsData: {
        data: mockData,
      },
    });
    expect(wrapper.props().data.length).toBe(2);
    expect(wrapper.find('.accordion-list').exists()).toBe(true);
  });

  it('should render no results', () => {
    const wrapper = shallow(AccordionFilter, {
      propsData: {
        data: [],
      },
    });
    expect(wrapper.props().data.length).toBe(0);
    expect(wrapper.find('.accordion-list').exists()).toBe(false);
  });

  it.skip('should render arts accordion', () => {
    const wrapper = shallow(AccordionFilter, {
      propsData: {
        data: mockData,
      },
      data() {
        return {
          searchtext: 'arts',
        };
      },
    });
    expect(wrapper.vm.searchtext).toBe('arts');
    expect(wrapper.find('.toggle__trigger').text()).toBe('arts');
  });

  it.skip('should render location 1 accordion', () => {
    const wrapper = shallow(AccordionFilter, {
      propsData: {
        data: mockData,
      },
      data() {
        return {
          selectedLocation: 'location 1',
        };
      },
    });
    expect(wrapper.vm.selectedLocation).toBe('location 1');
    expect(wrapper.find('.table').text()).toContain('location 1');
  });

  it.skip('should render location 2 accordion', () => {
    const wrapper = shallow(AccordionFilter, {
      propsData: {
        data: mockData,
      },
    });
    expect(wrapper.vm.selectedLocation).toBe('location 1');
    expect(wrapper.find('.table').text()).toContain('location 1');
  });
});
