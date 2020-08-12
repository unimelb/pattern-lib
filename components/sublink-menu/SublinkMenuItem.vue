<template>
  <div class="sublink-menu__item">
    <a
      :href="link"
      class="sublink-menu__link">
      <slot name="link" />
      <SvgIcon
        class="push-icon__icon"
        name="chevron-right"
        height="12"
        width="12" />
    </a>
    <div class="sublink-menu__description">
      <slot name="description" />
    </div>
  </div>
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
