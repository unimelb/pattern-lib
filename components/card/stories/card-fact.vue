<template>
  <div class="card card--fact card--bdr">
    <div class="card__inner">
      <h3 class="card__header heading-section">{{title}}</h3>
      <h4 class="card__meta heading-card">{{meta}}</h4>
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
      excerpt: {
        type: String,
        default: 'Completed something or rather'
      }
    }
  }

</script>