<template>
  <blockquote
    class="blockquote"
    :class="{ 'blockquote--bdr-top': borderTop, 'blockquote--bdr-btm': borderBottom }"
  >
    <span><slot></slot></span>
    <cite class="blockquote__author">{{ author }}</cite>
  </blockquote>
</template>

<script>
export default {
  props: {
    author: {
      type: String,
      required: true,
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
