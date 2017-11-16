<template>
  <svg :width="width" :height="height" focusable="false" role="presentation">
    <use :xlink:href="'#icon-' + name" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: ['name', 'width', 'height'],
};
</script>
