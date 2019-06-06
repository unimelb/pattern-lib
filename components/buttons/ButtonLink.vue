<template>
  <a
    v-if="element === 'a'"
    :href="href"
    class="btn"><slot/>ccc</a>
  <button
    v-else-if="element === 'button'"
    class="btn"><slot/>fff</button>
</template>

<script>
export default {
  name: 'ButtonLink',
  props: {
    href: {
      type: String,
      default: '#',
    },
    element: {
      type: String,
      default: 'a',
    },
  },
};
</script>
