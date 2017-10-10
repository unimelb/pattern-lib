<template>
  <div class="btn-owner card card--focus-box card--focus-box-vert">
    <icon class="card--focus-box__cnr card--focus-box__cnr--top-left" name="focus-top-left" width="54" height="54" />
    <icon class="card--focus-box__cnr card--focus-box__cnr--btm-right" name="focus-bottom-right" width="54" height="54" />

    <div class="card__inner ">
      <svg class="card--focus-box__icon" viewBox="20 0 150 150" width="100%" height="100%" v-html="icon">
      </svg>
      <h3>{{ title }}</h3>
      <p>{{ excerpt }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CardFocusBox',
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: 'Test title',
    },
    href: {
      type: String,
      default: '#',
    },
    excerpt: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quae doloribus, aliquid modi? Blanditiis quod, ullam aliquam provident, accusamus neque aut necessitatibus accusantium maxime voluptates sit consequatur illum tempora magnam.',
    },
  },
};

</script>
