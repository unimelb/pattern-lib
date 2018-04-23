<template>
  <component :is="container" :class="`toggleblock${isActive ? ' toggleblock--active': ''}`">
    <component
      ref="header"
      tabindex="0"
      :is="element"
      :class="`toggleblock__default${isActive ? ' toggleblock__default--active': ''}`"
      :id="`${namespace}-header-${index + 1}`"
      :aria-controls="`${namespace}-panel-${index + 1}`"
      :aria-selected="isActive"
      @keydown="handleKey"
    >
      <slot></slot>
    </component>
    <component
      ref="panel"
      role="region"
      :is="element"
      :class="`toggleblock__hidden${isActive ? ' toggleblock__hidden--active': ''}`"
      :id="`${namespace}-panel-${index + 1}`"
      :aria-labelledby="`${namespace}-header-${index + 1}`"
      :tabindex="isActive ? 0 : -1"
      :aria-expanded="isActive"
      :aria-hidden="!isActive"
    >
      <slot name="hidden"></slot>
    </component>
  </component>
</template>

<script>
export default {
  name: 'toggle-block',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    container: {
      type: String,
      default: 'div',
    },
    element: {
      type: String,
      default: 'div',
    },
  },
  data() {
    return {
      isActive: false,
      namespace: '',
      index: 0,
    };
  },
  mounted() {
    this.isActive = this.active;
    if (this.$parent.namespace) {
      this.namespace = this.$parent.namespace;
    } else {
      this.namespace = `ui-toggle-${this._uid}`;
    }

    if (this.$parent.handleClick) {
      this.bindClick(this.$parent.handleClick);
    } else {
      this.bindClick(this.toggle);
    }
  },
  methods: {
    header() { return this.$refs.header; },
    panel() { return this.$refs.panel; },
    getActive() { return this.isActive; },
    handleKey(e) { if (this.$parent.handleKey) this.$parent.handleKey(e); },
    setIndex(v) { this.index = v; },
    setActive(v) {
      this.isActive = v;
      this.$emit('toggle-block:setActive', this.isActive);
    },
    toggle() {
      this.isActive = !this.isActive;
      this.$emit('toggle-block:toggle', this.isActive);
    },
    bindClick(fn) {
      this.trigger = this.$refs.header;
      this.$slots.default.forEach((el) => {
        if (el.context && el.context.$refs && el.context.$refs.trigger) this.trigger = el.context.$refs.trigger;
      });
      this.trigger.addEventListener('click', fn);
      this.$emit('toggle-block:bound');
    },
  },
};
</script>
