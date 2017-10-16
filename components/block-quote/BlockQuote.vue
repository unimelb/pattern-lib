<template>
  <blockquote
    class="block-quote"
    :class="{ 'block-quote--bdr-top': borderTop, 'block-quote--bdr-btm': borderBottom }"
  >
    <p class="block-quote__content"><slot></slot></p>
    <cite v-if="author" class="block-quote__author">{{ author }}</cite>
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
