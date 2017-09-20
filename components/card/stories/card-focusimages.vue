<template>
  <div v-if="element === 'div'" class="card card--image-focus">
    <div class="card__thumb">
      <img :src="thumb" />
    </div>
    <span class="card__inner">
      <h3>{{title}}</h3>
      <p>{{excerpt}}</p>
    </span>
  </div>
  <a v-else-if="element === 'a'" href="" class="btn-owner card card--image-focus">
    <div class="card__thumb">
      <img :src="thumb" />
    </div>
    <span class="card__inner">
      <h3>{{title}}</h3>
      <p>{{excerpt}}</p>
    </span>
  </a>
</template>

<script>
  export default {
    name: 'CardFocusImages',
    props: {
      thumb: {
        type: String,
        default: "http://via.placeholder.com/200x400"
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
      element: {
        type: String,
        default: "a"
      },
      excerpt: {
        type: String,
        default: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quae doloribus, aliquid modi? Blanditiis quod, ullam aliquam provident, accusamus neque aut necessitatibus accusantium maxime voluptates sit consequatur illum tempora magnam.'
      }
    }
  }
</script>