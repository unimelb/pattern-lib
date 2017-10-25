<template>
  <a :href="link" class="sublink-menu__item">
    <span class="push-icon">
      <slot></slot>
      <SvgIcon class="push-icon__icon" name="chevron-right" height="16" width="16" />
    </span>
  </a>
</template>

<script>
export default {
  props: {
    link: String,
  },
};
</script>
