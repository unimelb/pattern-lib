<template>
  <mega-menu
    :faculty-title="facultyTitle"
    :items="items"
    :top-items="topItems"
    active="/random-link"
  />
</template>

<script>
import { codeBlock } from '../../../../.storybook/utils';
import MegaMenu from '../MegaMenu.vue';

const markup = codeBlock(`
  <mega-menu
    faculty-title="Faculty of Fine Arts and Music"
    items="[
        {
          title: 'About us',
          href: '/',
        },
        {
          title: 'study with us',
          href: '/find-a-course',
        },
        {
          title: 'showcase',
          href: '/why-melbourne',
          feature: {
            title: 'Campaign title',
            text:
              'This should in theory be a super short para to sell the campaign, but I know <em>someone</em> will put too much text in',
            img: 'https://placeimg.com/360/200/arch',
            link: 'http://google.com',
          },
          items: [
            { title: 'Entry requirements1', href: '/random-link' },
            { title: 'Entry requirements2', href: 'http://www.google.com' },
            { title: 'Entry requirements3', href: 'http://www.google.com' },
            { title: 'Entry requirements4', href: 'http://www.google.com' },
            { title: 'Entry requirements5', href: 'http://www.google.com' },
          ],
        },
        {
          title: 'events',
          href: '/admissions',
          feature: {
            title: 'Different campaign',
            img: 'https://placeimg.com/360/200/nature',
          },
          items: [
            { title: 'Entry non requirements6', href: 'http://www.google.com' },
            { title: 'Entry non requirements7', href: 'http://www.google.com' },
            {
              title:
                'Entry non requirements8 has a particularly long title for no good reason',
              href: 'http://www.google.com',
            },
            { title: 'Entry non requirements9', href: 'http://www.google.com' },
            {
              title: 'Entry non requirements10',
              href: 'http://www.google.com',
            },
            {
              title: 'Entry non requirements11',
              href: 'http://www.google.com',
            },
            {
              title: 'Entry non requirements12',
              href: 'http://www.google.com',
            },
            {
              title: 'Entry non requirements13',
              href: 'http://www.google.com',
            },
            {
              title: 'Entry non requirements14',
              href: 'http://www.google.com',
            },
            { title: 'Entry non requirements15', href: 'http://www.google.com' },
          ],
        },
        {
          title: 'our campus',
          href: '/student-experience',
          feature: {
            alt: 'Screen reader only caption!',
            img: 'https://placeimg.com/360/200/nature',
            link: 'http://google.com',
          },
          items: [
            { title: 'Entry requirements21', href: '/2random-link' },
            { title: 'Entry requirements22', href: 'http://2www.google.com' },
            { title: 'Entry requirements23', href: 'http://2www.google.com' },
            { title: 'Entry requirements24', href: 'http://2www.google.com' },
            { title: 'Entry requirements25', href: 'http://2www.google.com' },
          ],
        },
        {
          title: 'research',
          href: '/connect',
        },
      ]"
    top-items="[
        {
          title: 'Students',
          href: '/students',
        },
        {
          title: 'Alumni',
          href: '/alumni',
        },
        {
          title: 'Supporters and Partners',
          href: '/supporters-and-partners',
        },
        {
          title: 'Contact us',
          href: '/contact us',
        },
        {
          title: 'FAQ',
          href: '/faq',
        },
      ]"
    active="/random-link"
  >
  </mega-menu>
`);

export default {
  components: { MegaMenu },
  data() {
    return {
      facultyTitle: 'Faculty of Fine Arts and Music',
      items: [
        {
          title: 'About us',
          href: '/',
        },
        {
          title: 'study with us',
          href: '/find-a-course',
        },
        {
          title: 'showcase',
          href: '/why-melbourne',
          feature: {
            title: 'Campaign title',
            text:
              'This should in theory be a super short para to sell the campaign, but I know <em>someone</em> will put too much text in',
            img: 'https://placeimg.com/360/200/arch',
            link: 'http://google.com',
          },
          items: [
            { title: 'Entry requirements1', href: '/random-link' },
            { title: 'Entry requirements2', href: 'http://www.google.com' },
            { title: 'Entry requirements3', href: 'http://www.google.com' },
            { title: 'Entry requirements4', href: 'http://www.google.com' },
            { title: 'Entry requirements5', href: 'http://www.google.com' },
          ],
        },
        {
          title: 'events',
          href: '/admissions',
          feature: {
            title: 'Different campaign',
            img: 'https://placeimg.com/360/200/nature',
          },
          items: [
            { title: 'Entry non requirements6', href: 'http://www.google.com' },
            { title: 'Entry non requirements7', href: 'http://www.google.com' },
            {
              title:
                'Entry non requirements8 has a particularly long title for no good reason',
              href: 'http://www.google.com',
            },
            { title: 'Entry non requirements9', href: 'http://www.google.com' },
            {
              title: 'Entry non requirements10',
              href: 'http://www.google.com',
            },
            {
              title: 'Entry non requirements11',
              href: 'http://www.google.com',
            },
            {
              title: 'Entry non requirements12',
              href: 'http://www.google.com',
            },
            {
              title: 'Entry non requirements13',
              href: 'http://www.google.com',
            },
            {
              title: 'Entry non requirements14',
              href: 'http://www.google.com',
            },
            { title: 'Entry non requirements15', href: 'http://www.google.com' },
          ],
        },
        {
          title: 'our campus',
          href: '/student-experience',
          feature: {
            alt: 'Screen reader only caption!',
            img: 'https://placeimg.com/360/200/nature',
            link: 'http://google.com',
          },
          items: [
            { title: 'Entry requirements21', href: '/2random-link' },
            { title: 'Entry requirements22', href: 'http://2www.google.com' },
            { title: 'Entry requirements23', href: 'http://2www.google.com' },
            { title: 'Entry requirements24', href: 'http://2www.google.com' },
            { title: 'Entry requirements25', href: 'http://2www.google.com' },
          ],
        },
        {
          title: 'research',
          href: '/connect',
        },
      ],
      topItems: [
        {
          title: 'Students',
          href: '/students',
        },
        {
          title: 'Alumni',
          href: '/alumni',
        },
        {
          title: 'Supporters and Partners',
          href: '/supporters-and-partners',
        },
        {
          title: 'Contact us',
          href: '/contact us',
        },
        {
          title: 'FAQ',
          href: '/faq',
        },
      ],
    };
  },
  readme: {
    custom: markup,
    source: false,
  },
};
</script>
