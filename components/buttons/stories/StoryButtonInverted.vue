<template>
  <div class="bg-inverted">
    <ButtonIcon inverted>
      I am an inverted button
    </ButtonIcon>
    <ButtonIcon
      href="www.google.com"
      inverted
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
