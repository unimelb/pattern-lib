<template>
  <CardCourse
    title="Bachelor of Commerce"
    category="Bachelor"
    type="bachelor"
    link="www.unimelb.edu.au"
    search-query="comm" />
</template>

<script>
import CardCourse from '../../CardCourse.vue';
import CardCourseReadme from './card-course.md';

export default {
  components: { CardCourse },
  readme: { custom: CardCourseReadme, source: true, html: true },
};
</script>
