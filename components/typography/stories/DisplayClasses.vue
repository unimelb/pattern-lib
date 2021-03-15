<template>
  <div>
    <p
      v-for="(name, c) in classes"
      :key="c"
      :class="c">
      {{ name }}
    </p>
  </div>
</template>

<script>
export default {
  data: () => ({
    classes: {
      'display--xl': 'Display extra large',
      'display--lg': 'Display large',
      'display--md': 'Display medium',
      'display--body': 'Display body',
    },
  }),
  readme: { source: true },
};
</script>
