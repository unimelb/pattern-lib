<template>
  <div class="card-container">
    <SvgIcon
      class="topLeft"
      name="focus-top-left"
      width="96"
      height="96"/>
    <SvgIcon
      class="btmRight"
      name="focus-bottom-right"
      width="96"
      height="96"/>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'CardWrapper',
};
</script>

<style scoped>
@import "../_vars.css";

/**
 * In Page Navigation cards
 */
.card-container {
  display: flex;
  position: relative;
  padding: 65px 54px 72px 95px;
  background: var(--col-background);
}

.topLeft {
  position: absolute;
  top: 0;
  left: 0;
  fill: var(--col-focus);
}

.btmRight {
  position: absolute;
  right: 0;
  bottom: 0;
  fill: var(--col-focus);
}
</style>
