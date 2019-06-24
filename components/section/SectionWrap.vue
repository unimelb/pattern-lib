<template>
  <component
    :is="progressive ? 'progressive-background' : element"
    :no-ratio="progressive"
    :src="progressive ? bgImage : false"
    :class="classes"
    :style="{ backgroundImage: bgImage && !progressive ? `url(${bgImage})` : '' }"
    class="section"
  >
    <div
      :class="{
        'section__inner--sm': sm,
        'section__inner--md': md,
        'section__inner--short': short,
        'section__inner--nopad': nopad
      }"
      class="section__inner"
    >
      <slot/>
    </div>
  </component>
</template>

<script>
export default {
  props: {
    short: {
      type: Boolean,
      default: false,
    },
    element: {
      type: String,
      default: 'div',
    },
    nopad: {
      type: Boolean,
      default: false,
    },
    sm: {
      type: Boolean,
      default: false,
    },
    md: {
      type: Boolean,
      default: false,
    },
    bgImage: {
      type: String,
      default: '',
    },
    bgColor: {
      type: String,
      default: '',
    },
    centred: {
      type: Boolean,
      default: false,
    },
    progressive: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        [`bg-${this.bgColor}`]: !!this.bgColor,
        'section--centred': this.centred,
        'section--image': this.bgImage && this.bgImage.length > 0,
      };
    },
  },
};
</script>
