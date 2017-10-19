<template>
  <li class="side-panel__nav-item clearfix">
    <a href="#" v-scroll-to="target">
      <span v-if="right">
        <slot></slot>
      </span>
      <span v-if="!right" class="push-icon">
        <slot></slot>
        <SvgIcon class="push-icon__icon" name="chevron-right" width="10" height="10" />
      </span>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    target: {
      type: String,
    },
    right: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
