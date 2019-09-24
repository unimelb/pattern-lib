<template>
  <a
    :href="href"
    class="ql-menu__link"
  >
    <span class="push-icon">
      <span :class="{'push-icon__text' : truncate}">{{ title }}</span>
      <SvgIcon
        class="push-icon__icon"
        name="chevron-right"
        height="16"
        width="16"
      />
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
      default: '#',
    },
    title: {
      type: String,
      default: '',
    },
    truncate: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
