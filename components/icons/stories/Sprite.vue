<template>
  <div>
    <SvgIcon v-for="n in names" :key="n" :name="n" />
  </div>
</template>

<script>
export default {
  data: () => ({
    names: [
      'chevron-right',
      'chevron-left',
      'chevron-down',
      'download',
      'play',
      'home',
      'search',
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
    ],
  }),
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
