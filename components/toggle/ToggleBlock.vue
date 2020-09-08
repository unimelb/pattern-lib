<template>
  <component
    :is="container"
    :class="`toggleblock${isActive ? ' toggleblock--active' : ''}`">
    <component
      :is="element"
      :id="`${namespace}-header-${index + 1}`"
      ref="header"
      :class="`toggleblock__default${isActive ? ' toggleblock__default--active' : ''}`"
      :aria-controls="`${namespace}-panel-${index + 1}`"
      :aria-selected="isActive"
      tabindex="0"
      @keydown="group ? group.handleKey($event) : handleKey($event)">
      <slot />
    </component>
    <component
      :is="element"
      :id="`${namespace}-panel-${index + 1}`"
      ref="panel"
      :class="`toggleblock__hidden${isActive ? ' toggleblock__hidden--active' : ''}`"
      :aria-labelledby="`${namespace}-header-${index + 1}`"
      :tabindex="isActive ? 0 : -1"
      :aria-expanded="isActive"
      :aria-hidden="!isActive"
      role="region">
      <slot name="hidden" />
    </component>
  </component>
</template>

<script>
// toggle-block-set-active
// toggle-block-toggle

import focusableElements from '../../utils/focusable-elements';

import {
  KEYCODE_TAB, KEYCODE_ENTER, KEYCODE_ESC, KEYCODE_SPACE,
} from '../../constants/keycodes';

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

      if (!this.$slots.default) {
        return t;
      }

      this.$slots.default.forEach((el) => {
        if (el.context && el.context.$refs && el.context.$refs.trigger) {
          t = el.context.$refs.trigger;
        }
      });

      return t;
    },
    group() {
      if (!this.$parent) {
        return false;
      }

      return this.$parent.groupParent === undefined ? false : this.$parent.groupParent;
    },
  },
  created() {
    this.isActive = this.active;
    if (this.$parent && this.$parent.namespace && this.$parent.namespace !== '') {
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
    this.focusableElements = focusableElements(this.$refs.panel);

    this.toggleFocusableElements();
  },
  methods: {
    header() {
      return this.$refs.header;
    },
    panel() {
      return this.$refs.panel;
    },
    getActive() {
      return this.isActive;
    },
    toggleFocusableElements() {
      this.focusableElements.forEach((el) => {
        el.setAttribute('tabindex', this.isActive ? '0' : '-1');
      });
    },
    handleKey(e) {
      // Don't catch key events when ⌘ or Alt modifier is present
      if (e.metaKey || e.altKey) {
        return;
      }

      // Allow tab to pass through
      if (e.keyCode !== KEYCODE_TAB) {
        e.preventDefault();
      }

      switch (e.keyCode) {
        // esc
        case KEYCODE_ESC:
          this.isActive = false;
          break;
        // enter / space
        case KEYCODE_ENTER:
        case KEYCODE_SPACE:
          this.toggle();
          break;
        default: break;
      }
    },
    setIndex(v) {
      this.index = v;
    },
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
