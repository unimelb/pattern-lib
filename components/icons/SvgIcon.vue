<template>
  <svg
    :width="width"
    :height="height"
    :viewBox="viewBox"
    focusable="false"
    role="presentation">
    <use :xlink:href="'#icon-' + name" />
    <slot/>
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: ['name', 'width', 'height', 'viewBox'],
};
</script>
