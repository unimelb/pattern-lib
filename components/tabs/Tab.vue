<template>
  <div
    v-show="isActive"
    :id="`${namespace}-panel-${index + 1}`"
    :aria-labelledby="`${namespace}-${index + 1}`"
    class="tabs__panel max"
    role="tabpanel"
  >
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
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
