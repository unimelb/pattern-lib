<template>
  <a
    class="logo__link"
    href="https://www.unimelb.edu.au">
    <img
      :class="classes"
      alt="The University of Melbourne homepage"
      src="../shared/logov2.svg"
    >
  </a>
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
        return 'logo--large';
      } return [
        {
          'logo--small': this.small,
          'logo--medium': this.medium,
          'logo--large': this.large,
        },
      ];
    },
  },
};
</script>
