<template>
  <svg
    :width="width"
    :height="height"
    :aria-label="name"
    focusable="false"
    role="img">
    <use :xlink:href="'#icon-' + name" />
    <title>{{ name | capitalize }}</title>
    <slot />
  </svg>
</template>

<script>
// TODO: investigate refactoring to import svgs dynamically using <path> or base64 in CSS
export default {
  name: 'SvgIcon',
  filters: {
    capitalize(value) {
      const startFromCharIndex = 0;

      let capitalisation = value;
      if (!capitalisation) {
        return '';
      }
      capitalisation = capitalisation.toString();

      return capitalisation.charAt(startFromCharIndex).toUpperCase() + capitalisation.slice(1);
    },
  },
  props: {
    name: {
      type: String,
      default: '',
    },
    width: {
      type: [String, Number],
      default: '0',
    },
    height: {
      type: [String, Number],
      default: '0',
    },
  },
};
</script>
