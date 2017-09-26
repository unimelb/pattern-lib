<template>
  <svg :width="width" :height="height" focusable="false" role="presentation">
    <use :xlink:href="'#' + name" />
  </svg>
</template>

<script>
  import sprite from '../sprite.svg';

  export default {
    props: ['name', 'width', 'height'],
    data: () => ({ sprite })
  };
</script>
