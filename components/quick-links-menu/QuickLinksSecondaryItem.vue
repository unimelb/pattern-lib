<template>
  <a
    :href="href"
    class="ql-menu__secondary-link">
    <SvgIcon
      :name="icon"
      class="ql-menu__secondary-icon"
      height="16"
      width="16" />
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
    title: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: 'chevron-right',
    },
  },
};
</script>
