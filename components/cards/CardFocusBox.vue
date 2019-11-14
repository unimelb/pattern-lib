<template>
  <FocusWrapper
    :semi-opaque="semiOpaque"
    :color="color"
    :class="classes"
    :size="size"
    class="card card--focus-box">
    <div class="card__inner">
      <svg
        v-if="icon"
        class="card--focus-box__icon"
        viewBox="20 0 150 150"
        width="100%"
        height="100%"
        v-html="icon" />
      <slot />
    </div>
  </FocusWrapper>
</template>

<script>
import FocusWrapper from '../focus-wrapper/FocusWrapper.vue';

export default {
  name: 'CardFocusBox',
  components: { FocusWrapper },
  props: {
    icon: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: 'Test title',
    },
    color: {
      type: String,
      default: '',
      validator: (color) => ['', 'navy', 'teal', 'yellow', 'emerald', 'orange', 'green', 'purple', 'pink'].indexOf(color) > -1,
    },
    href: {
      type: String,
      default: '#',
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    excerpt: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quae doloribus, aliquid modi? Blanditiis quod, ullam aliquam provident, accusamus neque aut necessitatibus accusantium maxime voluptates sit consequatur illum tempora magnam.',
    },
    semiOpaque: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'large',
    },
  },
  computed: {
    classes() {
      return {
        'card--focus-box-vert': this.vertical,
      };
    },
  },
};
</script>
