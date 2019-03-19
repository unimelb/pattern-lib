<template>
  <div
    :style="{'width': width && width || '50%'}"
    :class="hasAperture ? 'page-title--aperture' : '' "
    class="page-title">
    <div class="page-title--top-layout">
      <div class="page-title__separator"/>
      <a
        :aria-label="title"
        :href="href"
        class="page-title__text">{{ title }}</a>
    </div>
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
    width: {
      type: [String, Boolean],
      default: false,
    },
    hasAperture: {
      type: Boolean,
      default: false,
    },
    apertureColor: {
      type: String,
      default: 'black',
    },
  },
  computed: {
    styles() {
      return {
        background: this.apertureColor,
      };
    },
  },
};
</script>
