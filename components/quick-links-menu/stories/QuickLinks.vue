<template>
  <div class="grid ql-menu" :class="level">
    <div class="cell cell--desk-2of3 ql-menu__content">
      <slot name="content"></slot>
    </div>
    <div class="cell cell--desk-1of3">
      <nav class="ql-menu__nav">
        <slot></slot>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    level: {
      type: String,
      default: 'ql-menu--l1',
    },
  },
};
</script>
