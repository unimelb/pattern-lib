import {
  shallow,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import PathfinderToday from '../PathfinderToday.vue';

expect.extend(toHaveNoViolations);

const pathfinderLinks = [
  {
    title: 'Undergraduate courses',
    description: 'Flexible first degrees that you can tailor to your career goals, or explore new possibilities.',
    href: '/landing-page/',
  },
  {
    title: 'Graduate courses',
    description: 'Study in small classes led by experts alongside others who share your interests and goals.',
    href: '/landing-page/',
  },
  {
    title: 'Graduate research',
    description: 'Access dedicated research centres, advanced  facilities, generous scholarships and more.',
    href: '/landing-page/',
  },
  {
    title: 'Short courses and microcredentials',
    description: 'Upskill, expand your knowledge and take the next step in your career with focused courses.',
    href: '/landing-page/',
  },
];

describe('PathfinderToday', () => {
  it('should match snapshot', () => {
    const result = shallow(PathfinderToday, {
      propsData: {
        items: pathfinderLinks,
      },
    }).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = shallow(PathfinderToday, {
      propsData: {
        items: pathfinderLinks,
      },
    }).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
