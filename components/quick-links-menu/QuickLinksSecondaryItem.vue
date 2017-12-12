<template>
  <a class="ql-menu__secondary-link" :href="href">
      <SvgIcon class="ql-menu__secondary-icon" :name="icon" height="16" width="16" />
      <span class="ql-menu__secondary-text">{{ title }}</span>
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
    icon: {
      type: String,
      default: 'chevron-right',
    },
  },
};
</script>
