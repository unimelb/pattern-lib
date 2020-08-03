<template>
  <a
    class="btn-card"
    :href="link">
    <div
      class="btn-card__inner bg-white"
      :class="colorClass">
      <div
        v-if="topLabel"
        class="btn-card__top-label">{{ topLabel }}</div>
      <div class="btn-card__label">{{ label }}</div>
      <SvgIcon
        class="btn-card__icon"
        name="arrow-right"
        width="26px"
        height="22px"
        aria-hidden="true" />
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
    topLabel: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
      required: true,
    },
    link: {
      type: String,
      default: '',
      required: true,
    },
    inverted: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    colorClass() {
      return {
        'btn-card--inverted': this.inverted,
      };
    },
  },
};
</script>
