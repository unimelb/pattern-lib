<template>
  <ul
    class="course-list list-reset"
    data-test="course-list">
    <li
      v-for="(course, index) in items"
      :key="index"
      class="course-list__item">
      <CardCourse
        :title="course.title"
        :category="course.category"
        :type="course.type"
        :link="course.link" />
    </li>
  </ul>
</template>

<script>
import CardCourse from './CardCourse.vue';

export default {
  components: {
    CardCourse,
  },
  props: {
    items: {
      type: Array,
      default: () => [{}],
    },
  },
};
</script>
