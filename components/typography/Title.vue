<template>
  <div>
    <tag class="size">{{ text }}<tag/>
  </tag></div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
      required: true,
    },
    headingLevel: {
      type: Number,
      default: 1,
      validator: {},
    },
  },
  computed: {
    tag() {
      const tag = this.headingLevel > 6 ? 'h6' : `h${this.headingLevel}`;
      return this.tag;
    },
  },
};
</script>
