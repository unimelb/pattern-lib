<template>
  <div class="container">
    <SvgIcon
      class="topLeft"
      name="focus-top-left"
      width="96"
      height="96" />
    <SvgIcon
      class="btmRight"
      name="focus-bottom-right"
      width="96"
      height="96" />
    <slot/>
  </div>
</template>

<script>

export default {
  name: 'CardInPageNavigation',
};

</script>

<style>
/**
 * In Page Navigation cards
 */
.container {
  display: block;
  position: relative;
  width: 806px;
  height: 478px;
  padding: 65px 54px 72px 95px;
  background: white;
}

.topLeft {
  position: absolute;
  top: 0;
  left: 0;
  fill: #D8D8D8;
}

.btmRight {
  position: absolute;
  right: 0;
  bottom: 0;
  fill: #D8D8D8;
}

</style>
