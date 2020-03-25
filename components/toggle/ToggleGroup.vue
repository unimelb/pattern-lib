<template>
  <component
    :is="container"
    :aria-multiselectable="solo === 'false' ? 'true' : 'false'"
    class="togglegroup">
    <slot />
  </component>
</template>

<script>
// toggle-group-hide-panel
// toggle-group-show-current-panel

import {
  KEYCODE_TAB,
  KEYCODE_ENTER,
  KEYCODE_ESC,
  KEYCODE_SPACE,
  KEYCODE_PGDN,
  KEYCODE_PGUP,
  KEYCODE_END,
  KEYCODE_HOME,
  KEYCODE_LEFT,
  KEYCODE_UP,
  KEYCODE_RIGHT,
  KEYCODE_DOWN,
} from '../../constants/keycodes';

export default {
  name: 'ToggleGroup',
  props: {
    container: {
      type: String,
      default: 'div',
    },
    solo: {
      type: String,
      default: 'false',
    },
    open: {
      type: String,
      default: 'false',
    },
  },
  data: () => ({
    panels: [],
    current: 0,
  }),
  computed: {
    namespace() {
      return `ui-toggle-${this._uid}`;
    },
    groupParent() {
      return this;
    },
  },
  created() {
    this.panels = this.$children;
  },
  mounted() {
    this.panels.forEach((panel, i) => {
      panel.setIndex(i);
      panel.isGrouped = true;
    });

    this.hideAllPanels();
    if (this.open === 'true') this.showCurrentPanel();
  },
  methods: {
    hideAllPanels() {
      this.panels.forEach((_p, index) => {
        this.hidePanel(index);
      });
    },
    hidePanel(i) {
      this.panels[i].setActive(false);
      this.$emit('toggle-group-hide-panel', i);
    },
    showCurrentPanel() {
      this.panels[this.current].setActive(true);
      this.$emit('toggle-group-show-current-panel', this.current);
    },
    getCurrent(e) {
      let curr = -1;
      this.panels.forEach((panel, index) => {
        if (panel.header() === e.target.parentNode.parentNode.firstChild
            || panel.header() === e.target.parentNode
            || panel.header() === e.target) {
          curr = index;
        }
      }, this);
      this.current = curr;
    },
    togglePanel(e) {
      this.getCurrent(e);

      if (this.panels[this.current].getActive()) {
        this.hidePanel(this.current);
        return;
      }

      if (this.solo === 'true') this.hideAllPanels();

      this.showCurrentPanel();
    },
    handleClick(e) {
      this.togglePanel(e);
    },
    handleKey(e) {
      // Don't catch key events when ⌘ or Alt modifier is present
      if (e.metaKey || e.altKey) return;

      // Allow tab to pass through
      if (e.keyCode !== KEYCODE_TAB) e.preventDefault();

      this.getCurrent(e);

      switch (e.keyCode) {
        // esc
        case KEYCODE_ESC:
          this.hidePanel(this.current);
          break;
        // enter / space
        case KEYCODE_ENTER:
        case KEYCODE_SPACE:
          this.togglePanel(e);
          break;
        // ctrl + pgdn
        case KEYCODE_PGDN:
          if (e.ctrlKey) this.nextPanel();
          break;
        // ctrl + pgup
        case KEYCODE_PGUP:
          if (e.ctrlKey) ;
          break;
        // end
        case KEYCODE_END:
          this.current = this.panels.length - 1;
          this.giveHeaderFocus();
          break;
        // home
        case KEYCODE_HOME:
          this.current = 0;
          this.giveHeaderFocus();
          break;
        // left / up
        case KEYCODE_LEFT:
        case KEYCODE_UP:
          this.previousPanel();
          break;
        // right / down
        case KEYCODE_RIGHT:
        case KEYCODE_DOWN:
          this.nextPanel();
          break;
        default:
          break;
      }
    },
    previousPanel() {
      this.current = this.current - 1 < 0 ? this.panels.length - 1 : this.current - 1;
      this.giveHeaderFocus();
    },
    nextPanel() {
      this.current = this.current + 1 > this.panels.length - 1 ? 0 : this.current + 1;
      this.giveHeaderFocus();
    },
    giveHeaderFocus() {
      // remove focusability from inactives
      this.panels.forEach((panel) => {
        panel.header().setAttribute('tabindex', -1);
      });
      // set active focus
      this.panels[this.current].header().setAttribute('tabindex', 0);
      this.panels[this.current].header().focus();
    },
  },
};
</script>
