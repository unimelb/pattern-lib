<template>
  <div>
    <ButtonIcon class="btn--secondary">
      Secondary Button
    </ButtonIcon>
    <ButtonIcon
      class="btn--secondary"
      href="www.google.com"
      disabled>
      I am a disabled button
    </ButtonIcon>
  </div>
</template>

<script>
export default {
  readme: { source: true, html: true },
};
</script>
