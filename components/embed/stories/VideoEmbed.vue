<template>
  <div :class="classObj">
    <iframe
      :src="src"
      width="560"
      height="315"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
  export default {
    props: {
      src: String,
      ratio: String
    },
    computed: {
      classObj: function () {
        return {
          embed: true,
          [`embed--${this.ratio}`]: !!this.ratio
        };
      }
    }
  }
</script>

