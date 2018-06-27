<template>
  <div>
    <SvgIcon v-for="n in names" :key="n" :name="n" />
  </div>
</template>

<script>
import docs from './docs.md';

export default {
  data: () => ({
    names: [
      'chevron-right',
      'chevron-left',
      'chevron-down',
      'download',
      'external',
      'play',
      'home',
      'search',
      'calendar',
      'clock',
      'close',
      'focus-top-left',
      'focus-bottom-right',
      'facebook',
      'twitter',
      'linkedin',
      'faculty',
      'library',
      'phone',
      'location',
      'campaign',
      'microphone',
      'jobs',
      'tag',
    ],
  }),
  readme: { custom: docs },
};
</script>

<style scoped>
  svg {
    display: inline-block;
    width: 5rem;
    height: 5rem;
    margin: .5rem;
  }
</style>
