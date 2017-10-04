<template>
  <a :href="href" class="btn-owner card card--division card--division--head card--bdr" :class="{'card--division--head-compact': compact}">
    <div class="card__thumb" >
      <img :src="thumb" alt="">
    </div>
    <div class="card__inner ">
      <div class="card__subheader">
        <h3 class="card__header">{{subtitle}}</h3>
        <p class="card__meta">{{meta}}</p>
      </div>
      <hr v-if="!compact">
      <p v-if="excerpt.length > 0">{{excerpt}}</p>
      <button-icon v-if="cols === 1" class="btn--wide">Contacts and bio</button-icon>
    </div>
    <div class="card__footer" v-if="cols !== 1 && compact === false">
      <button-icon element="button" class="btn--fullwidth">Contacts and bio</button-icon>
    </div>
    
  </a>
</template>

<script>
  import ButtonIcon from './../../buttons/stories/ButtonIcon.vue';
  export default {
    components: { ButtonIcon }, 
    props: {
      thumb: {
        type: String,
        default: "http://via.placeholder.com/360x360"
      },
      cols: {
        type: Number,
        default: 3
      },
      title: {
        type: String,
        default: "Test title"
      },
      subtitle: {
        type: String,
        default: "Test title"
      },
      meta: {
        type: String,
        default: "03 Apr 2017 | SPEECH"
      },
      href: {
        type: String,
        default: "#"
      },
      compact: {
        type: Boolean,
        default: false,
      },
      excerpt: {
        type: String,
        default: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quae doloribus, aliquid modi? Blanditiis quod, ullam aliquam provident, accusamus neque aut necessitatibus accusantium maxime voluptates sit consequatur illum tempora magnam.'
      }
    }
  }

</script>