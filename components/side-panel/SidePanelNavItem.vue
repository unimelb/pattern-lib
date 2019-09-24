<template>
  <li class="side-panel__nav-item clearfix">
    <a
      v-scroll-to="target"
      href="#"
    >
      <span v-if="right">
        <slot />
      </span>
      <span
        v-if="!right"
        class="push-icon"
      >
        <slot />
        <SvgIcon
          class="push-icon__icon"
          name="chevron-right"
          width="10"
          height="10"
        />
      </span>
    </a>
  </li>
</template>

<script>
import SvgIcon from '../icons/SvgIcon.vue';

export default {
  components: {
    SvgIcon,
  },
  props: {
    target: {
      type: String,
      default: '',
    },
    right: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
