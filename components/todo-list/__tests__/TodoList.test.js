import {
  mount,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import TodoList from '../TodoList.vue';

expect.extend(toHaveNoViolations);

describe('TodoList', () => {
  it('should match snapshot', () => {
    const result = mount(TodoList, {
      propsData: {
        bgColor: 'light-blue',
        img: 'http://lorempixel.com/640/480/people',
        ariaLabel: 'Duis nulla id sint exercitation sint nisi reprehenderit nulla nulla enim consequat id velit aliqua.',
        heading: 'Pariatur cupidatat incididunt.',
        description: 'In mollit adipisicing commodo tempor proident dolore consectetur in culpa. Non esse reprehenderit et occaecat proident nisi. Do nulla elit cupidatat esse non in nulla.',
        buttonCardData: [{
          topLabel: '29th May',
          label: 'Velit quis non anim deserunt anim aliqua enim.',
          link: 'https://www.unimelb.edu.au',
        },
        {
          label: 'Velit quis non anim deserunt anim aliqua enim.',
          link: 'https://www.unimelb.edu.au',
        },
        {
          label: 'Velit quis non anim deserunt anim aliqua enim.',
          link: 'https://www.unimelb.edu.au',
          inverted: true,
        }],
      },
    }).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = mount(TodoList, {
      propsData: {
        bgColor: 'light-blue',
        img: 'http://lorempixel.com/640/480/people',
        ariaLabel: 'Duis nulla id sint exercitation sint nisi reprehenderit nulla nulla enim consequat id velit aliqua.',
        heading: 'Pariatur cupidatat incididunt.',
        description: 'In mollit adipisicing commodo tempor proident dolore consectetur in culpa. Non esse reprehenderit et occaecat proident nisi. Do nulla elit cupidatat esse non in nulla.',
        buttonCardData: [{
          topLabel: '29th May',
          label: 'Velit quis non anim deserunt anim aliqua enim.',
          link: 'https://www.unimelb.edu.au',
        },
        {
          label: 'Velit quis non anim deserunt anim aliqua enim.',
          link: 'https://www.unimelb.edu.au',
        },
        {
          label: 'Velit quis non anim deserunt anim aliqua enim.',
          link: 'https://www.unimelb.edu.au',
          inverted: true,
        }],
      },
    }).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
