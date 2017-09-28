<template>
  <figure 
    class="figure" 
    :class="{
      'figure--inset': inset, 
      'figure--inset-left': left, 
      'figure--inset-right': right,
      'figure--inset-lge' : large,
    }">
    <slot></slot>
    <img v-if="img" :src="img" alt="">
    <figcaption v-if="caption.length > 0">{{caption}}</figcaption>
  </figure>
</template>


<script>
  export default {
    props: {
      img: {
        type: String,
      },
      caption: {
        type: String,
        default: "test caption"
      },
      inset: {
        type: Boolean,
        default: false,
      },
      left: {
        type: Boolean,
      },
      large: {
        type: Boolean,
      },
      right: {
        type: Boolean
      }
    }
  }

</script>