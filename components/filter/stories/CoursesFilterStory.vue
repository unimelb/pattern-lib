<template>
  <CoursesFilter :data="cardsData" />
</template>

<script>
import CoursesFilter from '../courses/CoursesFilter.vue';
import cardsData from '../courses/data.json';
import cardsReadme from '../courses/courses.md';

export default {
  components: { CoursesFilter },
  data() {
    return {
      cardsData,
    };
  },
  readme: { custom: cardsReadme, html: false, source: false },
};
</script>
