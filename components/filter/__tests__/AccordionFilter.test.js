import { mount, shallow } from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import AccordionFilter from '../accordion/AccordionFilter.vue';

expect.extend(toHaveNoViolations);

const mockData = [
  {
    name: 'arts',
    semester: ['january'],
    location: ['location 1', 'location 2'],
    points: 'points 1',
    discipline: 'discipline 1',
    audition: 'audition 1',
    abroad: 'abroad 1',
    overview:
      'Exercitation quis sunt fugiat aute adipisicing nulla pariatur ad et fugiat commodo mollit proident. Esse reprehenderit duis ea fugiat reprehenderit amet proident. Labore consequat dolore incididunt enim qui aute nulla ad magna occaecat ullamco. Ipsum consequat commodo ut ullamco sunt ea aliqua magna elit ea aliquip id quis ex. Voluptate voluptate mollit eu irure ipsum labore laborum sunt dolor dolore est. Nostrud tempor non duis excepteur nulla excepteur cupidatat excepteur et laborum tempor. Sit est sit exercitation deserunt sint incididunt.',
    buttonText: 'Handbook Link',
    buttonLink: 'www.unimelb.edu.au',
  },
  {
    name: 'science',
    semester: ['february', 'march'],
    location: ['location 2'],
    points: 'points 2',
    discipline: 'discipline 2',
    audition: 'audition 2',
    abroad: 'abroad 2',
    overview:
      'Exercitation quis sunt fugiat aute adipisicing nulla pariatur ad et fugiat commodo mollit proident. Esse reprehenderit duis ea fugiat reprehenderit amet proident. Labore consequat dolore incididunt enim qui aute nulla ad magna occaecat ullamco. Ipsum consequat commodo ut ullamco sunt ea aliqua magna elit ea aliquip id quis ex. Voluptate voluptate mollit eu irure ipsum labore laborum sunt dolor dolore est. Nostrud tempor non duis excepteur nulla excepteur cupidatat excepteur et laborum tempor. Sit est sit exercitation deserunt sint incididunt.',
    buttonText: 'Handbook Link',
    buttonLink: 'www.unimelb.edu.au',
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
    const wrapper = mount(AccordionFilter, {
      propsData: {
        data: mockData,
      },
    });

    expect(wrapper.props().data.length).toBe(2);
    expect(wrapper.find('.accordion-list').exists()).toBe(true);
  });

  it('should render nothing', () => {
    const wrapper = mount(AccordionFilter, {
      propsData: {
        data: [],
      },
    });
    expect(wrapper.props().data.length).toBe(0);
    expect(wrapper.find('.accordion-list').exists()).toBe(false);
  });

  it('should render arts accordion', () => {
    const wrapper = mount(AccordionFilter, {
      propsData: {
        data: mockData,
      },
    });
    const input = wrapper.find('input[type="search"]');
    input.element.value = 'arts';
    input.trigger('input');
    wrapper.find('button').trigger('click');

    expect(wrapper.vm.dataFiltered.length).toBe(1);
  });

  it('should render location 1 accordion', () => {
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
    const dropdown = wrapper.find('option');
    dropdown.setValue = 'location 1';
    wrapper.find('button').trigger('click');

    expect(wrapper.vm.selectedLocation).toBe('location 1');
    expect(wrapper.vm.dataFiltered.length).toBe(1);
  });

  it('should render discipline 1 accordion', () => {
    const wrapper = shallow(AccordionFilter, {
      propsData: {
        data: mockData,
      },
      data() {
        return {
          selectedDiscipline: 'discipline 1',
        };
      },
    });
    const dropdown = wrapper.find('option');
    dropdown.setValue = 'discipline 1';
    wrapper.find('button').trigger('click');

    expect(wrapper.vm.selectedDiscipline).toBe('discipline 1');
    expect(wrapper.vm.dataFiltered.length).toBe(1);
  });

  it('should render audition 1 accordion', () => {
    const wrapper = shallow(AccordionFilter, {
      propsData: {
        data: mockData,
      },
      data() {
        return {
          selectedAudition: 'audition 1',
        };
      },
    });
    const dropdown = wrapper.find('option');
    dropdown.setValue = 'audition 1';
    wrapper.find('button').trigger('click');

    expect(wrapper.vm.selectedAudition).toBe('audition 1');
    expect(wrapper.vm.dataFiltered.length).toBe(1);
  });

  it('should render arts filtered through input arts and location 1', () => {
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
    const input = wrapper.find('input[type="search"]');
    input.element.value = 'arts';
    input.trigger('input');

    const dropdown = wrapper.find('option');
    dropdown.setValue = 'location 1';

    wrapper.find('button').trigger('click');

    expect(wrapper.vm.selectedLocation).toBe('location 1');
    expect(wrapper.vm.searchText).toBe('arts');
    expect(wrapper.vm.dataFiltered.length).toBe(1);
  });

  it('should render science filtered through input discipline 2 and audtion requirement 2', () => {
    const wrapper = shallow(AccordionFilter, {
      propsData: {
        data: mockData,
      },
      data() {
        return {
          selectedDiscipline: 'discipline 2',
          selectedAudition: 'audition 2',
        };
      },
    });
    const dropdown = wrapper.find('option');
    dropdown.setValue = 'discipline 2';
    wrapper.find('button').trigger('click');

    const dropdown2 = wrapper.find('option');
    dropdown2.setValue = 'audition 2';
    wrapper.find('button').trigger('click');

    expect(wrapper.vm.selectedDiscipline).toBe('discipline 2');
    expect(wrapper.vm.selectedAudition).toBe('audition 2');
    expect(wrapper.vm.dataFiltered.length).toBe(1);
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(AccordionFilter).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
