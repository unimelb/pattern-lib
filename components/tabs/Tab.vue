<template>
  <div
    :id="`${namespace}-panel-${index + 1}`"
    v-if="isActive"
    class="tabs__panel"
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
  mounted() {
    this.isActive = this.active;
  },
};
</script>
