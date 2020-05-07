import {
  shallow,
} from 'vue-test-utils';
import {
  toHaveNoViolations,
} from 'jest-axe';
import CardCourse from '../CardCourse.vue';

expect.extend(toHaveNoViolations);

describe('Course Card', () => {
  it('should match snapshot', () => {
    const result = shallow(CardCourse, {
      propsData: {
        title: 'Bachelor of Design',
        category: 'bachelor',
        type: 'bachelor',
        link: '/find/courses/undergraduate/bachelor-of-design',
      },
    }).element;
    expect(result).toMatchSnapshot();
  });

  it('should render category correctly', () => {
    const wrapper = shallow(CardCourse, {
      propsData: {
        title: 'Bachelor of Design',
        category: 'bachelor',
        type: 'bachelor',
        link: '/find/courses/undergraduate/bachelor-of-design',
      },
    });

    expect(wrapper.find('[data-test="card-course"]').classes()).toContain('card-course--bachelor');
    expect(wrapper.find('[data-test="course-type"]').text()).toEqual('bachelor');
    expect(wrapper.find('[data-test="course-name"]').text()).toEqual('Bachelor of Design');
  });

  it('should render phd category correctly', () => {
    const wrapper = shallow(CardCourse, {
      propsData: {
        title: 'Infection and Immunity at Doherty Institute',
        category: 'phd',
        type: 'phd',
        link: '/find/courses/specialisation/infection-and-immunity-at-doherty-institute',
      },
    });

    expect(wrapper.find('[data-test="card-course"]').classes()).toContain('card-course--phd');
    expect(wrapper.find('[data-test="course-type"]').text()).toEqual('PhD Program');
    expect(wrapper.find('[data-test="course-name"]').text()).toEqual('Infection and Immunity at Doherty Institute');
  });
});
