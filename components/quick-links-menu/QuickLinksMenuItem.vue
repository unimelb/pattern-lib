<template>
  <a class="ql-menu__link" :href="href">
    <span class="push-icon">
      <span :class="{'push-icon__text' : truncate}">{{ title }}</span>
      <SvgIcon class="push-icon__icon" name="chevron-right" height="16" width="16" />
    </span>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: '#',
    },
    title: String,
    truncate: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
