<template>
  <component
    :is="container"
    :class="`toggleblock${isActive ? ' toggleblock--active': ''}`">
    <component
      ref="header"
      :is="element"
      :class="`toggleblock__default${isActive ? ' toggleblock__default--active': ''}`"
      :id="`${namespace}-header-${index + 1}`"
      :aria-controls="`${namespace}-panel-${index + 1}`"
      :aria-selected="isActive"
      tabindex="0"
      @keydown="group ? group.handleKey($event) : handleKey($event)"
    >
      <slot/>
    </component>
    <component
      ref="panel"
      :is="element"
      :class="`toggleblock__hidden${isActive ? ' toggleblock__hidden--active': ''}`"
      :id="`${namespace}-panel-${index + 1}`"
      :aria-labelledby="`${namespace}-header-${index + 1}`"
      :tabindex="isActive ? 0 : -1"
      :aria-expanded="isActive"
      :aria-hidden="!isActive"
      role="region"
    >
      <slot name="hidden"/>
    </component>
  </component>
</template>

<script>
// toggle-block-set-active
// toggle-block-toggle

export default {
  name: 'ToggleBlock',
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
      focusableElements: [],
    };
  },
  computed: {
    trigger() {
      let t = this.$refs.header;
      this.$slots.default.forEach((el) => {
        if (el.context && el.context.$refs && el.context.$refs.trigger) t = el.context.$refs.trigger;
      });
      return t;
    },
    group() {
      return this.$parent.groupParent === undefined ? false : this.$parent.groupParent;
    },
  },
  created() {
    this.isActive = this.active;
    if (this.$parent.namespace && this.$parent.namespace !== '') {
      this.namespace = this.$parent.namespace;
    } else {
      this.namespace = `ui-toggle-${this._uid}`;
    }
  },
  mounted() {
    if (this.group) {
      this.trigger.addEventListener('click', this.group.handleClick);
    } else {
      this.trigger.addEventListener('click', this.toggle);
    }

    // Create array of focusable elements in context
    const focusableSelectors = [
      'a[href]',
      'area[href]',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'button:not([disabled])',
      'iframe',
      'object',
      'embed',
      '[contenteditable]',
      '[tabindex]:not([tabindex^="-"])',
    ];

    this.focusableElements = [].slice.call(this.$refs.panel.querySelectorAll(focusableSelectors.join()));
    this.toggleFocusableElements();
  },
  methods: {
    header() { return this.$refs.header; },
    panel() { return this.$refs.panel; },
    getActive() { return this.isActive; },
    toggleFocusableElements() {
      this.focusableElements.forEach((el) => {
        el.setAttribute('tabindex', this.isActive ? 0 : -1);
      });
    },
    handleKey(e) {
      // Don't catch key events when ⌘ or Alt modifier is present
      if (e.metaKey || e.altKey) return;

      // Allow tab to pass through
      if (e.keyCode !== 9) e.preventDefault();

      switch (e.keyCode) {
        // esc
        case 27:
          this.isActive = false;
          break;
        // enter / space
        case 13:
        case 32:
          this.toggle();
          break;
        default: break;
      }
    },
    setIndex(v) { this.index = v; },
    setActive(v) {
      this.isActive = v;
      this.toggleFocusableElements();
      this.$emit('toggle-block-set-active', this.isActive);
    },
    toggle() {
      this.isActive = !this.isActive;
      this.toggleFocusableElements();
      this.$emit('toggle-block-toggle', this.isActive);
    },
  },
};
</script>
