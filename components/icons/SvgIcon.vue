<template>
  <svg
    :width="width"
    :height="height"
    :viewBox="viewBox"
    :aria-label="'Icon ' + name"
    focusable="false"
    role="img"
  >
    <use :xlink:href="'#icon-' + name"/>
    <slot/>
  </svg>
</template>

<script>
// TODO: investigate refactoring to import svgs dynamically using <path> or base64 in CSS
export default {
  name: 'SvgIcon',
  props: ['name', 'width', 'height', 'viewBox'],
};
</script>
