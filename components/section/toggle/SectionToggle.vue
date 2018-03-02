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
      panel.namespace = this.namespace;
      panel.index = i;
      if (i === 0) {
        panel.isActive = true;
      }
    });

    this.dom = {
      headers: [].slice.call(this.$el.querySelectorAll('.toggle__header')),
      panels: [].slice.call(this.$el.querySelectorAll('.toggle__panel')),
    };

    this.hideAllPanels();
    if (this.open) this.showCurrentPanel();
  },
  methods: {
    hideAllPanels() {
      this.dom.headers.forEach((_header, index) => {
        this.hidePanel(index);
      });
    },
    hidePanel(i) {
      this.dom.headers[i].setAttribute('aria-selected', 'false');
      this.dom.headers[i].setAttribute('aria-expanded', 'false');
      if (this.dom.panels[i].getAttribute('aria-hidden') === 'false') this.unsetPanelHeight(i);
      this.dom.panels[i].setAttribute('tabindex', -1);
      this.dom.panels[i].setAttribute('aria-hidden', 'true');
    },
    showCurrentPanel() {
      this.dom.headers[this.current].setAttribute('aria-selected', 'true');
      this.dom.headers[this.current].setAttribute('aria-expanded', 'true');
      this.setPanelHeight(this.current);
      this.dom.panels[this.current].setAttribute('tabindex', 0);
      this.dom.panels[this.current].setAttribute('aria-hidden', 'false');
    },
    getCurrent(e) {
      let curr = -1;
      this.dom.headers.forEach((header, index) => {
        if (header === e.target.parentNode.parentNode.firstChild ||
            header === e.target.parentNode ||
            header === e.target) {
          curr = index;
        }
      }, this);
      this.current = curr;
    },
    togglePanel(e) {
      this.getCurrent(e);

      if (this.dom.headers[this.current].getAttribute('aria-selected') === 'true') {
        this.hidePanel(this.current);
        return;
      }

      if (this.solo) this.hideAllPanels();

      this.showCurrentPanel();
    },

    getPanelHeight(i) {
      const p = this.dom.panels[i];
      // set auto height and read offsetHeight
      p.style.height = 'auto';
      const height = p.offsetHeight;
      // remove style
      p.style.height = '';
      return height;
    },
    setPanelHeight(i) {
      const p = this.dom.panels[i];
      // get panel height
      const panelHeight = this.getPanelHeight(i);
      // recalc style and layout
      p.getBoundingClientRect();
      // set height on panel, reset to 'auto' on transition complete
      p.style.height = `${panelHeight}px`;
      setTimeout(() => {
        p.style.transition = 'none';
        p.style.height = 'auto';
        // recalc style and layout
        p.getBoundingClientRect();
        p.style.transition = '';
      }, 250);
    },
    unsetPanelHeight(i) {
      const p = this.dom.panels[i];
      // get panel height
      const panelHeight = this.getPanelHeight(i);
      // set panel height from 'auto' to px
      p.style.height = `${panelHeight}px`;
      // recalc style and layout
      p.getBoundingClientRect();
      // reset height
      p.style.height = 0;
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
          this.current = this.dom.headers.length - 1;
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
      this.current = this.current - 1 < 0 ? this.dom.headers.length - 1 : this.current - 1;
      this.giveHeaderFocus();
    },
    nextPanel() {
      this.current = this.current + 1 > this.dom.headers.length - 1 ? 0 : this.current + 1;
      this.giveHeaderFocus();
    },
    giveHeaderFocus() {
      // remove focusability from inactives
      this.dom.headers.forEach((header) => {
        header.setAttribute('tabindex', -1);
      });
      // set active focus
      this.dom.headers[this.current].setAttribute('tabindex', 0);
      this.dom.headers[this.current].focus();
    },
  },
};
</script>
