<template>
  <div v-if="element === 'div'" class="card card--image-focus">
    <h3 v-if="titleabove === true">{{title}}</h3>
    <div class="card__thumb" :class="{'card__thumb--full': fullImg}">
      <img :src="thumb" />
    </div>
    <div class="card__inner">
      <h3 v-if="titleabove === false">{{title}}</h3>
      <div v-html="excerpt"></div>
    </div>
  </div>
  <a v-else-if="element === 'a'" href="" class="btn-owner card card--image-focus">
    <div class="card__thumb">
      <img :src="thumb" />
    </div>
    <div class="card__inner">
      <h3>{{title}}</h3>
      <div v-html="excerpt"></div>
      <button-icon element="button" class="btn--fullwidth">{{title}}</button-icon>
    </div>
  </a>
</template>

<script>
  import ButtonIcon from './../../buttons/stories/ButtonIcon.vue';
  export default {
    name: 'CardFocusImages',
    components: {ButtonIcon},
    props: {
      thumb: {
        type: String,
        default: "http://via.placeholder.com/200x400"
      },
      fullImg: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: "Test title"
      },
      titleabove: {
        type: Boolean
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