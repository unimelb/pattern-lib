<template>
  <PageHeaderHome
    title="Effective Leadership Communication"
    introduction="Become an authentic, persuasive and engaging communicator to enhance your effectiveness as a leader."
    :img="{ src: placeholder, alt: 'Business leaders at a conference' }"
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
      ],
    };
  },
};
</script>
