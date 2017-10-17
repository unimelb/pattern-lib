<template>
    <component :is="progressive ? 'progressive-background' : 'section'" :no-ratio="progressive" :src="progressive ? bgImage : null" class="section" :class="classes" :style="{backgroundImage: bgImage && !progressive ? `url(${bgImage})` : '' }">
    <div class="section__inner" :class="{'section__inner--sml': small, 'section__inner--mid': mid, 'section__inner--short': short}">
      <slot></slot>
    </div>
  </component>
</template>

<script>
export default {
  props: {
    short: Boolean,
    small: Boolean,
    mid: Boolean,
    bgImage: String,
    bgColor: String,
    centred: Boolean,
    progressive: Boolean,
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
