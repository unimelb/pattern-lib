<template>
  <a :href="href" class="btn-owner card card--image-focus card--focus-box">
    <svg class="card--focus-box__cnr card--focus-box__cnr--top-left" role="presentation" focusable="false" width="54" height="54">
      <use xlink:href="#focus-top-left"></use>
    </svg>
    <svg class="card--focus-box__cnr card--focus-box__cnr--btm-right" role="presentation" focusable="false" width="54" height="54">
      <use xlink:href="#focus-bottom-right"></use>
    </svg>
    <img :src="thumb" />
  </a>
</template>

<script>
  export default {
    name: 'CardFocusImages',
    props: {
      thumb: {
        type: String,
        default: "http://via.placeholder.com/400x200"
      },
      title: {
        type: String,
        default: "Test title"
      },
      meta: {
        type: String,
        default: "Test title"
      },
      href: {
        type: String,
        default: "#"
      },
      excerpt: {
        type: String,
        default: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quae doloribus, aliquid modi? Blanditiis quod, ullam aliquam provident, accusamus neque aut necessitatibus accusantium maxime voluptates sit consequatur illum tempora magnam.'
      }
    }
  }
</script>