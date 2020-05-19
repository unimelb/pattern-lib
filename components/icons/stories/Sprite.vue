<template>
  <div>
    <SvgIcon
      v-for="n in names"
      :key="n"
      :name="n" />
  </div>
</template>

<script>
import SvgIcon from '../SvgIcon.vue';
import docs from './docs.md';

export default {
  components: {
    SvgIcon,
  },
  data: () => ({
    names: [
      'chevron-right',
      'chevron-left',
      'chevron-down',
      'chevron-up',
      'download',
      'external',
      'play',
      'pause',
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
      'info',
      'arrow-right',
      'globe-asia',
      'heart',
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
