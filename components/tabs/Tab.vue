<template>
  <div
    :id="`${namespace}-panel-${index + 1}`"
    v-if="isActive"
    class="tabs__panel max"
    role="tabpanel"
    :aria-labelledby="`${namespace}-${index + 1}`"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    active: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    isActive: false,
    namespace: '',
    index: 0,
  }),
  created() {
    this.isActive = this.active;
  },
};
</script>
