<template>
  <a class="ql-menu__link" :href="href">
    <span class="push-icon">
      <slot></slot>
      <SvgIcon class="push-icon__icon" name="icon-chevron-right" height="16" width="16" />
    </span>
  </a>
</template>

<script>
export default {
  props: {
    href: String,
  },
};
</script>
