<template>
  <blockquote
    class="block-quotation"
    :class="{ 'block-quotation--bdr-top': borderTop, 'block-quotation--bdr-btm': borderBottom }"
  >
    <p class="block-quotation__content"><slot></slot></p>
    <cite v-if="author" class="block-quotation__author">{{ author }}</cite>
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
