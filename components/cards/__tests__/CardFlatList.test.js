import {
  mount,
} from 'vue-test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import CardFlatList from '../CardFlatList.vue';

expect.extend(toHaveNoViolations);

const items = [
  {
    title: 'Test Title',
    description: 'Consectetur culpa nostrud officia consequat ut mollit elit aliquip nisi consequat occaecat quis excepteur.',
    cta: { href: 'https://www.unimelb.edu.au/', text: 'Cta button' },
    img: { src: 'https://picsum.photos/seed/1/540/360', alt: 'Image for example purposes.' },
  },
  {
    title: 'Test Title',
    description: 'Consectetur culpa nostrud officia consequat ut mollit elit aliquip nisi consequat occaecat quis excepteur.',
    cta: { href: 'https://www.unimelb.edu.au/', text: 'Cta button' },
    img: { src: 'https://picsum.photos/seed/1/540/360', alt: 'Image for example purposes.' },
  },
  {
    title: 'Test Title',
    description: 'Consectetur culpa nostrud officia consequat ut mollit elit aliquip nisi consequat occaecat quis excepteur.',
    cta: { href: 'https://www.unimelb.edu.au/', text: 'Cta button' },
    img: { src: 'https://picsum.photos/seed/1/540/360', alt: 'Image for example purposes.' },
  },
  {
    title: 'Test Title',
    description: 'Consectetur culpa nostrud officia consequat ut mollit elit aliquip nisi consequat occaecat quis excepteur.',
    cta: { href: 'https://www.unimelb.edu.au/', text: 'Cta button' },
    img: { src: 'https://picsum.photos/seed/1/540/360', alt: 'Image for example purposes.' },
  },
];

describe('CardFlatList', () => {
  it('should match snapshot', () => {
    const result = mount(CardFlatList, {
      propsData: {
        items,
      },
    }).element;
    expect(result).toMatchSnapshot();
  });

  it('Component throws no accessibility violations', (done) => {
    const html = mount(CardFlatList, {
      propsData: {
        items,
      },
    }).html();
    // pass anything that outputs html to axe
    return axe(html).then((response) => {
      expect(response).toHaveNoViolations();
      done();
    });
  });
});
