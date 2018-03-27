<template>
  <div class="toggle" :aria-multiselectable="!solo">
    <slot></slot>
  </div>
</template>

<script>
import SectionTogglePanel from './SectionTogglePanel.vue';

export default {
  name: 'section-toggle',
  components: { SectionTogglePanel },
  props: {
    solo: {
      type: Boolean,
      default: false,
    },
    open: {
      type: Boolean,
      default: false,
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
  },
  created() {
    this.panels = this.$children;
  },
  mounted() {
    this.panels.forEach((panel, i) => {
      panel.index = i;
      if (i === 0) {
        panel.isActive = true;
      }
    });

    this.hideAllPanels();
    if (this.open) this.showCurrentPanel();
  },
  methods: {
    hideAllPanels() {
      this.panels.forEach((_p, index) => {
        this.hidePanel(index);
      });
    },
    hidePanel(i) {
      this.panels[i].setExpanded(false);
      this.panels[i].unsetPanelHeight();
    },
    showCurrentPanel() {
      this.panels[this.current].setExpanded(true);
      this.panels[this.current].setPanelHeight();
    },
    getCurrent(e) {
      let curr = -1;
      this.panels.forEach((panel, index) => {
        if (panel.header() === e.target.parentNode.parentNode.firstChild ||
            panel.header() === e.target.parentNode ||
            panel.header() === e.target) {
          curr = index;
        }
      }, this);
      this.current = curr;
    },
    togglePanel(e) {
      this.getCurrent(e);

      if (this.panels[this.current].isExpanded) {
        this.hidePanel(this.current);
        return;
      }

      if (this.solo) this.hideAllPanels();

      this.showCurrentPanel();
    },
    handleClick(e) {
      this.togglePanel(e);
    },
    handleKey(e) {
      // Don't catch key events when ⌘ or Alt modifier is present
      if (e.metaKey || e.altKey) return;

      // Allow tab to pass through
      if (e.keyCode !== 9) e.preventDefault();

      this.getCurrent(e);

      switch (e.keyCode) {
        // esc
        case 27:
          this.hidePanel(this.current);
          break;
        // enter / space
        case 13:
        case 32:
          this.togglePanel(e);
          break;
        // ctrl + pgdn
        case 34:
          if (e.ctrlKey) this.nextPanel();
          break;
        // ctrl + pgup
        case 33:
          if (e.ctrlKey)
            ;
          break;
        // end
        case 35:
          this.current = this.panels.length - 1;
          this.giveHeaderFocus();
          break;
        // home
        case 36:
          this.current = 0;
          this.giveHeaderFocus();
          break;
        // left / up
        case 37:
        case 38:
          this.previousPanel();
          break;
        // right / down
        case 39:
        case 40:
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
