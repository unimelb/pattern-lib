<template>
  <svg :width="width" :height="height" focusable="false" role="presentation">
    <use :xlink:href="'#' + name" />
  </svg>
</template>

<script>
export default {
  props: ['name', 'width', 'height'],
};
</script>
