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
import SvgIcon from '../icons/SvgIcon.vue';

export default {
  components: {
    SvgIcon,
  },
  props: {
    href: {
      type: String,
      default: '',
      required: true,
    },
    title: {
      type: String,
      default: '',
      required: true,
    },
    icon: {
      type: String,
      default: 'chevron-right',
    },
  },
};
</script>
