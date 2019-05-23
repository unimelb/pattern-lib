<template>
  <div>
    <SvgIcon
      v-for="n in names"
      :key="n"
      :name="n"/>
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
      'chevron-up',
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
      'instagram',
      'vimeo',
      'youtube',
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
      'newspaper',
      'envelope',
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
  margin: 0.5rem;
}
</style>
