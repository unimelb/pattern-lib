<template>
  <a
    :href="href"
    :class="classes"
    tabindex="0"
    role="button"
    class="btn-owner card card--link card--bdr">
    <div
      v-if="thumb"
      :style="{ backgroundImage: `url(${thumb})` }"
      :aria-label="title"
      class="card__thumb" />
    <div
      :class="cardHeaderClasses"
      class="card__header">
      <span :class="{ 'title-inverted': !inverted }">{{ title }}</span>
      <SvgIcon
        width="15px"
        height="15px"
        :name="'chevron-right'" />
    </div>
  </a>
</template>

<script>
import SvgIcon from '../icons/SvgIcon.vue';

export default {
  components: {
    SvgIcon,
  },
  props: {
    thumb: {
      type: [String, Boolean],
      default: 'https://via.placeholder.com/400x200',
    },
    title: {
      type: String,
      default: 'Test title',
    },
    href: {
      type: String,
      default: '#',
    },
    inverted: {
      type: Boolean,
      default: false,
    },
    cols: {
      type: Number,
      default: 4,
      validator: (cols) => {
        const maxColumns = 4;

        return cols && cols <= maxColumns;
      },
    },
  },
  computed: {
    classes() {
      return [
        {
          'bg-inverted card--bdr': this.inverted,
          'bg-white card--bdr-grey': !this.inverted,
        },
      ];
    },
    cardHeaderClasses() {
      return [
        {
          'cl-white': this.inverted,
          'cl-inverted': !this.inverted,
        },
      ];
    },
  },
};
</script>
