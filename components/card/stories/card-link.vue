<template>
  <a :href="href" class="btn-owner card card--link card--bdr" :class="{'bg-inverted': inverted, 'bg-white' : !inverted}">
    <div class="card__thumb" :style="{backgroundImage: `url('${thumb}')`}"></div>
    <icon width="15px" height="15px" name="chevron-right" />
    <h5 class="card__header">
      {{title}}
    </h5>
  </a>
</template>

<script>
  import icon from './../../icons/stories/Icon.vue';

  export default {
    name: 'CardLink',
    components: {
      icon,
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
      inverted: {
        type: Boolean,
        default: false
      }
    }
  }

</script>