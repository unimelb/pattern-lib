<template>
  <a :href="href" class="btn-owner card card--link card--bdr" :class="{'bg-inverted': inverted, 'bg-white' : !inverted}">
    <div class="card__thumb" :style="{backgroundImage: `url('${thumb}')`}"></div>
    <div class="card__inner ">
      <svg class="card__header-icon" focusable="false" height="17" role="presentation" width="17">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-chevron-right"></use>
      </svg>
      <h5 class="card__header">
        {{title}}
      </h5>
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