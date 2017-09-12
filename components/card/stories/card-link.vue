<template>
  <a :href="href" class="btn-owner card card--link card--bdr" :class="{'bg-inverted': inverted, 'bg-white' : !inverted}">
    <div class="card__thumb" :style="{backgroundImage: `url('${thumb}')`}"></div>
    <div class="card__inner ">
      <h4>{{title}}</h4>
      <!-- TODO: icon to be added -->
    </div>
  </a>
</template>

<script>
  export default {
    name: 'CardLink',
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
      inverted: {
        type: Boolean,
        default: false
      }
    }
  }

</script>