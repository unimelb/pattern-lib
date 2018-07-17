<template>
  <div :class="classes">
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
    src: {
      type: String,
      required: true,
    },
    ratio: {
      type: String,
      validator: value => ['21_9'].indexOf(value) !== -1,
    },
  },
  computed: {
    classes() {
      return {
        embed: true,
        [`embed--${this.ratio}`]: !!this.ratio,
      };
    },
  },
};
</script>
