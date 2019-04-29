<template>
  <a
    :style="{'width': width && width || '50%'}"
    :aria-label="title"
    :href="href"
    class="page-title">{{ title }}</a>
</template>

<script>
export default {
  name: 'MegaMenuTitle',
  props: {
    title: {
      type: [String, Boolean],
      default: false,
    },
    href: {
      type: [String],
      required: true,
    },
    width: {
      type: [String, Boolean],
      default: false,
    },
  },
};
</script>
