<template>
  <MegaMenu
    :items="items"
    active="/random-link"
    faculty-name="This is a Faculty name"
    faculty-link="/faculty-link"
    faculty-width="25.5%" />
</template>

<script>
import MegaMenu from '../MegaMenu.vue';
import megaMenuDocs from './mega-menu-docs.md';

export default {
  components: { MegaMenu },
  readme: { custom: megaMenuDocs, source: true, html: true },

  data() {
    return {
      items: [
        {
          title: 'Study',
          href: '/',
        },
        {
          title: 'Find a course',
          href: '/find-a-course',
        },
        {
          title: "Why's Melbourne",
          href: '/why-melbourne',
          feature: {
            title: 'Campaign title',
            text:
              'This should in theory be a super short para to sell the campaign, but I know <em>someone</em> will put too much text in',
            img: 'https://picsum.photos/360/200',
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
          title: 'Admissions',
          href: '/admissions',
          feature: {
            title: 'Different campaign',
            img: 'https://picsum.photos/360/200',
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
          title: 'Student experience',
          href: '/student-experience',
          feature: {
            alt: 'Screen reader only caption!',
            img: 'https://picsum.photos/360/200',
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
          title: 'Connect',
          href: '/connect',
        },
      ],
    };
  },
};
</script>
