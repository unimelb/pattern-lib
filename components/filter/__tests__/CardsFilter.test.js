import { mount, shallow } from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';

import CardsFilter from '../cards/CardsFilter.vue';

expect.extend(toHaveNoViolations);

const mockData = [{
  title: 'Masters Exhibition 2018',
  link: 'https://matrix-cms.unimelb.edu.au/ffam-dev/showcase/masters-exhibition-2018',
  description: 'Masters Exhibition 2018 by Visual Art Postgraduates at the Victorian College of the Arts',
  performance: [
    'Exhibition',
  ],
  school: 'ABC',
  disciplines: [
    'Visual Art',
  ],
  img_url: 'https://matrix-cms.unimelb.edu.au/__data/assets/image/0027/76743/varieties/thumb.jpg',
  start_time: '2018-12-01',
  location: 'Margaret Lawrence Gallery and The Stables',
},
{
  title: 'aaaaaa',
  link: 'https://matrix-cms.unimelb.edu.au/ffam-dev/showcase/wilin-jams-2018',
  description: 'Wilin Centre for Indigenous Arts and Culture event Wilin Jams',
  performance: [
    'Event',
  ],
  school: 'Victorian College of the Arts',
  disciplines: [
    'Indigenous Arts and Culture',
  ],
  img_url: 'https://matrix-cms.unimelb.edu.au/__data/assets/image/0026/76373/varieties/thumb.jpg',
  start_time: '2018-11-29',
  location: 'Performing Arts Building',
}];

describe('CardsFilter', () => {
  it('should match snapshot', () => {
    const result = mount(CardsFilter,
      {
        propsData: {
          data: mockData,
        },
      }).element;
    expect(result).toMatchSnapshot();
  });

  it('should have default props and correct types data', () => {
    const wrapper = shallow(CardsFilter);
    const {
      data,
    } = wrapper.vm.$options.props;

    expect(data.type).toBe(Array);
  });

  it('should render cards list', () => {
    const wrapper = shallow(CardsFilter, {
      propsData: {
        data: mockData,
      },
    });
    expect(wrapper.props().data.length).toBe(2);
    expect(wrapper.vm.dataFiltered.length).toBe(2);
  });

  it('should render nothing', () => {
    const wrapper = shallow(CardsFilter, {
      propsData: {
        data: [],
      },
    });
    expect(wrapper.props().data.length).toBe(0);
    expect(wrapper.vm.dataFiltered.length).toBe(0);
  });

  it('should render Masters Exhibition 2018 card', () => {
    const wrapper = shallow(CardsFilter, {
      propsData: {
        data: mockData,
      },
    });
    const input = wrapper.find('input[type="search"]');
    input.element.value = 'Masters Exhibition 2018';
    input.trigger('input');
    wrapper.find('button').trigger('click');

    expect(wrapper.vm.dataFiltered.length).toBe(1);
  });

  it('should render performance: Exhibition card', () => {
    const wrapper = shallow(CardsFilter, {
      propsData: {
        data: mockData,
      },
      data() {
        return {
          selectedPerformance: 'Exhibition',
        };
      },
    });
    const dropdown = wrapper.find('option');
    dropdown.setValue = 'Exhibition';
    wrapper.find('button').trigger('click');

    expect(wrapper.vm.selectedPerformance).toBe('Exhibition');
    expect(wrapper.vm.dataFiltered.length).toBe(1);
  });

  it('should render school: Victorian College of the Arts card', () => {
    const wrapper = shallow(CardsFilter, {
      propsData: {
        data: mockData,
      },
      data() {
        return {
          selectedSchool: 'Victorian College of the Arts',
        };
      },
    });
    const dropdown = wrapper.find('option');
    dropdown.setValue = 'Victorian College of the Arts';
    wrapper.find('button').trigger('click');

    expect(wrapper.vm.selectedSchool).toBe('Victorian College of the Arts');
    expect(wrapper.vm.dataFiltered.length).toBe(1);
  });

  it('should render disciplines: Indigenous Arts and Culture card', () => {
    const wrapper = shallow(CardsFilter, {
      propsData: {
        data: mockData,
      },
      data() {
        return {
          selectedDiscipline: 'Indigenous Arts and Culture',
        };
      },
    });
    const dropdown = wrapper.find('option');
    dropdown.setValue = 'Indigenous Arts and Culture';
    wrapper.find('button').trigger('click');

    expect(wrapper.vm.selectedDiscipline).toBe('Indigenous Arts and Culture');
    expect(wrapper.vm.dataFiltered.length).toBe(1);
  });

  it('should filter the input and select and render: Masters Exhibition 2018 title card', () => {
    const wrapper = shallow(CardsFilter, {
      propsData: {
        data: mockData,
      },
      data() {
        return {
          selectedSchool: 'ABC',
        };
      },
    });
    const input = wrapper.find('input[type="search"]');
    input.element.value = 'Masters Exhibition 2018';
    input.trigger('input');

    const dropdown = wrapper.find('option');
    dropdown.setValue = 'ABC';

    wrapper.find('button').trigger('click');

    expect(wrapper.vm.searchText).toBe('Masters Exhibition 2018');
    expect(wrapper.vm.selectedSchool).toBe('ABC');
    expect(wrapper.vm.dataFiltered.length).toBe(1);
  });

  it('should render correctly one item filtering through 2 selects', () => {
    const wrapper = shallow(CardsFilter, {
      propsData: {
        data: mockData,
      },
      data() {
        return {
          selectedDiscipline: 'Indigenous Arts and Culture',
          selectedPerformance: 'Event',
        };
      },
    });
    const dropdown = wrapper.find('option');
    dropdown.setValue = 'Indigenous Arts and Culture';
    wrapper.find('button').trigger('click');

    const dropdown2 = wrapper.find('option');
    dropdown2.setValue = 'Event';
    wrapper.find('button').trigger('click');

    expect(wrapper.vm.selectedDiscipline).toBe('Indigenous Arts and Culture');
    expect(wrapper.vm.selectedPerformance).toBe('Event');
    expect(wrapper.vm.dataFiltered.length).toBe(1);
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(CardsFilter).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
