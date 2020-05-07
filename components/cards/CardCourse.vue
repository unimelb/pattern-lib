<template>
  <a
    :href="link"
    :class="{ [`card-course--${type}`]: true }"
    class="card-course"
    data-test="card-course">
    <span
      data-test="course-type"
      class="card-course__type">{{ formattedCategory }}</span>
    <span
      class="card-course__name"
      data-test="course-name">{{ title }}</span>
    <svg
      v-if="type === 'Pathway'"
      class="card-course__icon"
      focusable="false"
      aria-hidden="true"
      role="presentation">
      <use
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xlink:href="#icon-signpost" />
    </svg>
  </a>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
      required: true,
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
