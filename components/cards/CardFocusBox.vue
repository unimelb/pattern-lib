<template>
  <FocusWrapper
    :color="color"
    size="large">
    <div class="card__inner">
      <svg
        v-if="icon"
        class="card--focus-box__icon"
        viewBox="20 0 150 150"
        width="100%"
        height="100%"
        v-html="icon"
      />
      <slot/>
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
  },
  computed: {
    classes() {
      return {
        'card--focus-box-vert': this.vertical,
        [`card--focus-box--${this.color}`]: this.color && this.color.length > 0,
      };
    },
  },
};
</script>
