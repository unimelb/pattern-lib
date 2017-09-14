<template>
  <a :href="href" class="btn-owner card card--division card--bdr">
    <div class="card__title bg-inverted">
      {{title}}
    </div>
    <div class="card__inner ">
      <div class="card__subheader">
        <h3 class="card__header">{{subtitle}}</h3>
        <p class="card__meta">{{meta}}</p>
      </div>
      <hr>
      <p>{{excerpt}}</p>
    </div>
    <div class="card__footer">
      <button class="btn btn--fullwidth">Contacts and bio</button>
    </div>
  </a>
</template>

<script>
  export default {
    name: 'CardNews',
    props: {
      thumb: {
        type: String,
        default: "http://via.placeholder.com/400x200"
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
      excerpt: {
        type: String,
        default: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quae doloribus, aliquid modi? Blanditiis quod, ullam aliquam provident, accusamus neque aut necessitatibus accusantium maxime voluptates sit consequatur illum tempora magnam.'
      }
    }
  }

</script>