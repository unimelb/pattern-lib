<template>
  <CardCourse
    title="Course Title"
    category="Course Category"
    type="bachelor"
    link="www.unimelb.edu.au" />
</template>

<script>
import CardCourse from '../../CardCourse.vue';
import CardCourseReadme from './card-course.md';

export default {
  components: { CardCourse },
  readme: { custom: CardCourseReadme, source: true, html: true },
};
</script>
