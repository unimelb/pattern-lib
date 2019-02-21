<template>
  <div class="card-focus__container">
    <SvgIcon
      class="card-focus__topLeft"
      name="focus-top-left"
      width="96"
      height="96"/>
    <SvgIcon
      class="card-focus__bottomRight"
      name="focus-bottom-right"
      width="96"
      height="96"/>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'FocusWrapper',
};
</script>

<style scoped>
.card-focus__container {
  display: flex;
  position: relative;
  padding: 65px 54px 72px 95px;
}

.card-focus__topLeft {
  position: absolute;
  top: 0;
  left: 0;
  fill: grey;
}

.card-focus__bottomRight {
  position: absolute;
  right: 0;
  bottom: 0;
  fill: grey;
}
</style>
