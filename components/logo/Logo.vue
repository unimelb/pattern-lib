<template>
  <div class="logo">
    <a
      class="logo__link"
      href="https://www.unimelb.edu.au">
      <img
        :class="['logo__image--' + size, noPadding ? 'logo--no-padding-' + size : '']"
        class="logo__image"
        alt="The University of Melbourne homepage"
        src="../shared/logo-with-padding.svg">
    </a>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'lg',
      validator: (value) => ['sm', 'md', 'lg'].indexOf(value) !== -1,
    },
    noPadding: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
