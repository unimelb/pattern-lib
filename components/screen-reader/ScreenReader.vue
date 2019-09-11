<template>
  <div class="screen-reader">
    <ButtonIcon
      :href="buttonHref"
      no-icon
      size="xsml"
      class="screen-reader__skippy screenreaders-only screenreaders-only-focusable btn--inverted">{{ buttonText }}</ButtonIcon>
  </div>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: 'Skip to main content',
    },
    buttonHref: {
      type: String,
      default: '#main',
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
