<template>
  <a :href="href" class="btn-owner card card--news card--bdr">
    <div class="card__thumb card__thumb--zoom" :style="{backgroundImage: `url('${thumb}')`}"></div>
    <div class="card__inner ">
      <h4 class="card__meta">{{meta}}</h4>
      <h3 class="card__header">{{title}}</h3>
      <p>{{excerpt}}</p>
    </div>
    <div class="card__footer">
      <button-icon class="btn--fullwidth" icon="chevron-right">Read more</button-icon>
    </div>
  </a>
</template>

<script>
  import ButtonIcon from './../../buttons/stories/ButtonIcon.vue';
  export default {
    name: 'CardNews',
    components: {ButtonIcon},
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
        default: "03 Apr 2017 | SPEECH"
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