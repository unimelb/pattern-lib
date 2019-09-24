<template>
  <transition
    name="fade"
    mode="out-in"
  >
    <div
      v-show="isActive"
      :id="`${namespace}-panel-${index + 1}`"
      class="tabs__panel max"
      role="tabpanel"
    >
      <slot />
    </div>
  </transition>
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

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease 0.125s;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  position: absolute;
  opacity: 0;
}
</style>
