<template>
  <div class="card card--fact card--bdr">
    <div class="card__inner">
      <h3 class="card__header" :class="{'card__header--sml' : smlHeader}">{{title}}</h3>
      <h4 class="card__meta">{{meta}}</h4>
      <p>{{excerpt}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CardFact',
    props: {
      title: {
        type: String,
        default: "42"
      },
      meta: {
        type: String,
        default: "Million students"
      },
      smlHeader: {
        type: Boolean,
        default: false
      },
      excerpt: {
        type: String,
        default: 'Completed something or rather'
      }
    }
  }

</script>