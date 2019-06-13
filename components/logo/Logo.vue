<template>
  <div class="logo">
    <a
      class="logo__link"
      href="https://www.unimelb.edu.au">
      <img
        :class="classes"
        class="logo__image"
        alt="The University of Melbourne homepage"
        src="../shared/logov2.svg"
      >
    </a>
  </div>
</template>

<script>
export default {
  props: {
    small: {
      type: Boolean,
      default: false,
    },
    medium: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      if ((this.small || this.medium || this.large) === false) {
        return 'logo__image--large logo--negative-margin';
      } return [
        {
          logo__image: this.small,
          'logo__image--medium': this.medium,
          'logo__image--large logo--negative-margin': this.large,
        },
      ];
    },
  },
};
</script>
