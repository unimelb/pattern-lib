<template>
  <div>
    <h1>
      <slot/>
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: ""
    },
    headingLevel: {
      type: Number,
      default: 1,
      validator: {}
    }
  }
};
</script>