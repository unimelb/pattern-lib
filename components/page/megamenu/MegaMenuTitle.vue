<template>
  <div
    v-if="title"
    class="page-title"
  >
    <div class="page-title__separator"/>
    <a
      :aria-label="title"
      :href="href"
      class="page-title__text"
      v-html="title"/>
  </div>
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
  },
};
</script>
