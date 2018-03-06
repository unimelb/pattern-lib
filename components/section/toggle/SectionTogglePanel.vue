<template>
  <div class="toggle__item">
    <div
      :id="`${namespace}-header-${index + 1}`"
      :aria-controls="`${namespace}-panel-${index + 1}`"
      tabindex="0"
      class="toggle__header"
      @click="handleClick"
      @keydown="handleKey"
    >
      <h2>{{ title }}</h2>
    </div>
    <div
      :id="`${namespace}-panel-${index + 1}`"
      role="region"
      :aria-labelledby="`${namespace}-header-${index + 1}`"
      :tabindex="isActive ? 0 : -1"
      class="toggle__panel"
      aria-expanded="false"
    >
      <div class="toggle__panel__inner">
        <slot></slot>
      </div>
      <a
        :href="`#${namespace}-header-${index + 1}`"
        :aria-labelledby="`${namespace}-header-${index + 1}`"
        class="toggle__footer"
        @click="handleClick"
      >
        {{ close }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    close: {
      type: String,
      default: 'Close',
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
  mounted() {
    this.isActive = this.active;
  },
  methods: {
    handleClick(e) { this.$parent.handleClick(e); },
    handleKey(e) { this.$parent.handleKey(e); },
  },
};
</script>
