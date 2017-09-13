<template>
  <svg :class="className" :width="width" :height="height" focusable="false" role="presentation">
    <use :xlink:href="sprite + '#' + name" />
  </svg>
</template>

<script>
  import sprite from '../sprite.svg';

  export default {
    props: ['className', 'name', 'width', 'height'],
    data: () => ({ sprite })
  };
</script>
