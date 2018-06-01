<template>
  <MegaMenu :items="items" active="/random-link" />
</template>

<script>
import MegaMenu from '../MegaMenu.vue';

export default {
  components: { MegaMenu },
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
          title: 'Why Melbourne',
          href: '/why-melbourne',
          feature: {
            title: 'Campaign title',
            text: 'This should in theory be a super short para to sell the campaign, but I know <em>someone</em> will put too much text in',
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
          title: 'Admissions',
          href: '/admissions',
          feature: {
            title: 'Different campaign',
            img: 'https://placeimg.com/360/200/nature',
          },
          items: [
            { title: 'Entry non requirements6', href: 'http://www.google.com' },
            { title: 'Entry non requirements7', href: 'http://www.google.com' },
            { title: 'Entry non requirements8 has a particularly long title for no good reason', href: 'http://www.google.com' },
            { title: 'Entry non requirements9', href: 'http://www.google.com' },
            { title: 'Entry non requirements10', href: 'http://www.google.com' },
            { title: 'Entry non requirements11', href: 'http://www.google.com' },
            { title: 'Entry non requirements12', href: 'http://www.google.com' },
            { title: 'Entry non requirements13', href: 'http://www.google.com' },
            { title: 'Entry non requirements14', href: 'http://www.google.com' },
            { title: 'Entry non requirements15', href: 'http://www.google.com' },
          ],
        },
        {
          title: 'Student experience',
          href: '/student-experience',
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
