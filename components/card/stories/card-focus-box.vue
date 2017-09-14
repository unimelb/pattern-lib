<template>
  <a :href="href" class="btn-owner card card--focus-box ">
    <svg class="card--focus-box__cnr card--focus-box__cnr--top-left" role="presentation" focusable="false" width="54" height="54">
      <use xlink:href="#focus-top-left"></use>
    </svg>
    <svg class="card--focus-box__cnr card--focus-box__cnr--btm-right" role="presentation" focusable="false" width="54" height="54">
      <use xlink:href="#focus-bottom-right"></use>
    </svg>
    <div class="card__inner ">
      <svg class="icon--large" focusable="false" height="170" role="presentation" width="170">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="icon"></use>
      </svg>
      <h3>{{title}}</h3>
      <p>{{excerpt}}</p>
    </div>
  </a>
</template>

<script>
  export default {
    name: 'CardFocusBox',
    props: {
      thumb: {
        type: String,
        default: "http://via.placeholder.com/400x200"
      },
      title: {
        type: String,
        default: "Test title"
      },
      href: {
        type: String,
        default: "#"
      },
      icon: {
        type: String,
        default: "#icon-learning-1"
      },
      excerpt: {
        type: String,
        default: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quae doloribus, aliquid modi? Blanditiis quod, ullam aliquam provident, accusamus neque aut necessitatibus accusantium maxime voluptates sit consequatur illum tempora magnam.'
      }
    }
  }

</script>