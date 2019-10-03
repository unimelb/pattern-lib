<template>
  <a
    :href="link"
    class="sublink-menu__item">
    <span class="push-icon">
      <slot />
      <SvgIcon
        class="push-icon__icon"
        name="chevron-right"
        height="16"
        width="16" />
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
    link: {
      type: String,
      default: '#',
    },
  },
};
</script>
