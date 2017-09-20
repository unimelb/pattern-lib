<template>
  <a :href="href" class="btn-owner card card--image card--bdr bg-inverted">
    <div class="card__thumb card__thumb--zoom" :style="{backgroundImage: `url('${thumb}')`}"></div>
    <div class="card__inner ">
      <button-icon class="btn--inverted btn--fullwidth" element="button">{{title}}</button-icon>
      <p>{{excerpt}}</p>
    </div>
  </a>
</template>

<script>
import ButtonIcon from './../../buttons/stories/ButtonIcon.vue';
  export default {
    name: 'CardImage',
    components: {
      ButtonIcon
    },
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
      excerpt: {
        type: String,
        default: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quae doloribus, aliquid modi? Blanditiis quod, ullam aliquam provident, accusamus neque aut necessitatibus accusantium maxime voluptates sit consequatur illum tempora magnam.'
      }
    }
  }

</script>