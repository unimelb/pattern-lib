<template>
  <blockquote
    class="quote"
    :class="{ 'quote--bdr-top': borderTop, 'quote--bdr-btm': borderBottom }"
  >
    <p class="quote__content"><slot></slot></p>
    <cite v-if="author" class="quote__author">{{ author }}</cite>
  </blockquote>
</template>

<script>
export default {
  props: {
    author: {
      type: String,
    },
    borderTop: {
      type: Boolean,
      default: false,
    },
    borderBottom: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
