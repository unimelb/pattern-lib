<template>
  <a
    :href="href"
    class="ql-menu__link">
    <span class="push-icon">
      <span :class="{ 'push-icon__text': truncate }">{{ title }}</span>
      <SvgIcon
        class="push-icon__icon"
        :name="'chevron-right'"
        height="16"
        width="16"
        aria-hidden="true" />
    </span>
  </a>
</template>

<script>
import SvgIcon from '../icons/SvgIcon.vue';

export default {
  components: {
    SvgIcon,
  },
  props: {
    href: {
      type: String,
      default: '',
      required: true,
    },
    title: {
      type: String,
      default: '',
      required: true,
    },
    truncate: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
