<template>
  <a
    href="https://www.unimelb.edu.au">
    <img
      :height="height"
      :width="width"
      alt="The University of Melbourne homepage"
      src="../shared/logov2.svg"
    >
  </a>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: 148,
    },
    width: {
      type: Number,
      default: 148,
    },
  },
};
</script>
