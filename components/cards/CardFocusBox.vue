<template>
  <div class="btn-owner card card--focus-box bg-white" :class="classes">
    <SvgIcon class="card--focus-box__cnr card--focus-box__cnr--top-left" name="focus-top-left" width="54" height="54" />
    <SvgIcon class="card--focus-box__cnr card--focus-box__cnr--btm-right" name="focus-bottom-right" width="54" height="54" />
    <div class="card__inner">
      <svg v-if="icon" class="card--focus-box__icon" viewBox="20 0 150 150" width="100%" height="100%" v-html="icon"/>
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CardFocusBox',
  props: {
    icon: {
      type: String,
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
    },
    excerpt: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quae doloribus, aliquid modi? Blanditiis quod, ullam aliquam provident, accusamus neque aut necessitatibus accusantium maxime voluptates sit consequatur illum tempora magnam.',
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
