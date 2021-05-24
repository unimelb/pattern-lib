<template>
  <PageHeaderHome
    title="Welcome to The University of Melbourne"
    :img="{ src: placeholder, alt: 'Sciente people doing an experiement' }"
    :bg-src="placeholderBg">
    <PathfinderToday
      slot="after"
      inline
      dark
      :items="pathfinderLinks" />
  </PageHeaderHome>
</template>

<script>
import PageHeaderHome from 'components/header/PageHeaderHome.vue';
import PathfinderToday from 'components/today/PathfinderToday/PathfinderToday.vue';

import placeholderBg from './static/hero-bg.jpg';
import placeholder from './static/hero-feature.png';

import Docs from './page-header-home.md';

export default {
  components: {
    PageHeaderHome, PathfinderToday,
  },
  readme: {
    custom: Docs,
    source: true,
    html: false,
  },
  data() {
    return {
      placeholder,
      placeholderBg,
      pathfinderLinks: [
        {
          title: 'Courses',
          description: 'Find the right course and see what makes studying with us different',
          href: '/landing-page/',
        },
        {
          title: 'Research',
          description: 'Discover world-leading research, resources, experts and facilities',
          href: '/landing-page/',
        },
        {
          title: 'Partnerships',
          description: 'Innovate with our world-class people, technology and facilities',
          href: '/landing-page/',
        },
        {
          title: 'Events',
          description: 'Connect with your community through virtual and in-person events',
          href: '/landing-page/',
        },
      ],
    };
  },
};
</script>
