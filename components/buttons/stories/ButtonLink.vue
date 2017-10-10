<template>
  <a v-if="element === 'a'" class="btn" :href="href"><slot></slot></a>
  <button v-else-if="element === 'button'" class="btn"><slot></slot></button>
</template>

<script>
export default {
  name: 'button-link',
  props: {
    href: {
      type: String,
      default: '',
    },
    element: {
      type: String,
      default: 'a',
    },
  },
};
</script>
