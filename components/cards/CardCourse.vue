<template>
  <a
    :href="link"
    :class="{
      [`card-course--${type}`]: true,
      'card-course--search-result': searchQuery,
    }"
    class="card-course"
    data-test="card-course">
    <span
      data-test="course-type"
      class="card-course__type">{{ formattedCategory }}</span>
    <span
      class="card-course__name"
      data-test="course-name">
      <template v-if="!searchQuery">
        {{ title }}
      </template>
      <!-- eslint-disable vue/no-v-html -->
      <span
        v-else
        v-html="textHighlight(title, searchQuery)" />
      <!-- eslint-enable vue/no-v-html -->
    </span>
  </a>
</template>

<script>
import textHighlight from '../../utils/textHighlight';

export default {
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
    searchQuery: {
      type: String,
      default: '',
      required: false,
    },
    type: {
      type: String,
      default: 'Undergraduate',
    },
    category: {
      type: String,
      default: 'Undergraduate',
    },
    link: {
      type: String,
      required: true,
      default: '#',
    },
  },
  data() {
    return {
      textHighlight,
    };
  },
  computed: {
    formattedCategory() {
      switch (this.category) {
        case 'phd':
          return 'PhD Program';

        default:
          return this.category;
      }
    },
  },
};
</script>
