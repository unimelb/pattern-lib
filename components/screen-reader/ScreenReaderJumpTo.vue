<template>
  <div class="screen-reader-jump-to">
    <ButtonIcon
      :href="toElement"
      no-icon
      size="xsml"
      class="screen-reader-jump-to__skippy screenreaders-only screenreaders-only-focusable btn--inverted">
      {{ text }}
    </ButtonIcon>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Skip to main content',
    },
    toElement: {
      type: String,
      default: '#main',
    },
  },
};
</script>
