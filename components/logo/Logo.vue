<template>
  <div class="logo">
    <a
      class="logo__link"
      href="https://www.unimelb.edu.au">
      <img
        :class="['logo__image--' + size, negativeMargin ? 'logo--negative-margin-' + size: '']"
        class="logo__image"
        alt="The University of Melbourne homepage"
        src="../shared/logo-with-padding.svg"
      >
    </a>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'lg',
      validator: value => ['sm', 'md', 'lg'].indexOf(value) !== -1,
    },
    negativeMargin: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
