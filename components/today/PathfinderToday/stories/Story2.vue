<template>
  <div class="bg-inverted">
    <PathfinderToday
      inline
      dark
      :items="pathfinderLinks" />
  </div>
</template>

<script>
import PathfinderToday from '../PathfinderToday.vue';
import PathfinderTodayMd from './PathfinderToday.md';

export default {
  components: { PathfinderToday },
  readme: { custom: PathfinderTodayMd, source: true, html: false },
  data() {
    return {
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
