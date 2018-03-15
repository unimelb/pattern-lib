<template>
  <div>
    <MegaMenu :items="items">
      <SearchIntegratedNav :items="items" class="elevated" />
    </MegaMenu>
  </div>
</template>

<script>
import MegaMenu from '../MegaMenu.vue';
import SearchIntegratedNav from '../../nav/stories/SearchIntegratedNav.vue';

export default {
  name: 'mega-menu-no-breadcrumbs',
  components: { MegaMenu, SearchIntegratedNav },
  data() {
    return {
      items: [
        {
          title: 'Why, Melbourne?',
          href: '/why',
          items: [
            { title: 'Entry requirements1', href: 'http://www.google.com' },
            { title: 'Entry requirements2', href: 'http://www.google.com' },
            { title: 'Entry requirements3', href: 'http://www.google.com' },
            { title: 'Entry requirements4', href: 'http://www.google.com' },
            { title: 'Entry requirements5', href: 'http://www.google.com' },
          ],
        },
        {
          title: 'Find a course',
          href: '/fac',
        },
        {
          title: 'Admissions',
          href: '/adm',
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
      ],
    };
  },
};
</script>
