<template>
  <div>
    <div class="toggle" role="tablist" aria-multiselectable="!solo" v-for="(item, index) in this.items" :key="item.id">
      <div class="toggle__item">
        <div @click="togglePanel" @keyup="handleKey" :id="`${namespace}-header-${index + 1}`" role="tab" :aria-controls="`${namespace}-panel-${index + 1}`" tabindex="0" class="toggle__header">
          <h2>{{ item.data.attrs.title }}</h2>
        </div>
        <div :id="`${namespace}-panel-${index + 1}`" role="tabpanel" :aria-labelledby="`${namespace}-header-${index + 1}`" tabindex="0" class="toggle__panel">
          <div class="toggle__panel__inner" v-html="content[index].innerHTML"></div>
          <a :href="`#${namespace}-header-${index + 1}`" class="toggle__footer">Back to Top</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { vnodeToElement } from '../../shared/utils';

export default {
  name: 'section-toggle',
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
  data() {
    return {
      current: 0,
    };
  },
  computed: {
    namespace() {
      return `ui-toggle-${this._uid}`;
    },
  },
  beforeCreate() {
    const list = this.$slots.default;
    this.items = list.filter(item => item.tag === 'section');

    this.content = [];
    this.items.forEach((item, index) => {
      this.content[index] = document.createElement('div');
      item.children.forEach(node => this.content[index].appendChild(vnodeToElement(node)));
    });
  },
  mounted() {
    if (this.disabled) return;

    this.headers = [].slice.call(this.$el.querySelectorAll('.toggle__header'));
    this.panels = [].slice.call(this.$el.querySelectorAll('.toggle__panel'));

    this.hideAllPanels();
    if (this.open) this.showCurrentPanel();
  },
  methods: {
    hideAllPanels() {
      this.headers.forEach((_header, index) => {
        this.hidePanel(index);
      });
    },
    hidePanel(i) {
      this.headers[i].setAttribute('aria-selected', 'false');
      this.headers[i].setAttribute('aria-expanded', 'false');
      if (this.panels[i].getAttribute('aria-hidden') === 'false') this.unsetPanelHeight(i);
      this.panels[i].setAttribute('tabindex', -1);
      this.panels[i].setAttribute('aria-hidden', 'true');
    },
    showCurrentPanel() {
      this.headers[this.current].setAttribute('aria-selected', 'true');
      this.headers[this.current].setAttribute('aria-expanded', 'true');
      this.setPanelHeight(this.current);
      this.panels[this.current].setAttribute('tabindex', 0);
      this.panels[this.current].setAttribute('aria-hidden', 'false');
    },
    getCurrent(e) {
      let curr = -1;
      this.headers.forEach((header, index) => {
        if (header === e.target.parentNode || header === e.target) curr = index;
      }, this);
      this.current = curr;
    },
    togglePanel(e) {
      this.getCurrent(e);

      if (this.headers[this.current].getAttribute('aria-selected') === 'true') {
        this.hidePanel(this.current);
        return;
      }

      if (this.solo) this.hideAllPanels();

      this.showCurrentPanel();
    },
    handleKey(e) {
      // Don't catch key events when ⌘ or Alt modifier is present
      if (e.metaKey || e.altKey) return;

      this.getCurrent(e);

      switch (e.keyCode) {
        // enter / space
        case 13:
        case 32:
          this.togglePanel(e);
          break;
        // esc
        case 27:
          this.hidePanel(this.current);
          break;
        // left / up
        case 37:
        case 38: {
          this.current = this.current - 1 < 0 ? this.headers.length - 1 : this.current - 1;
          this.giveHeaderFocus();
          break;
        }
        // right / down
        case 39:
        case 40: {
          this.current = this.current + 1 > this.headers.length - 1 ? 0 : this.current + 1;
          this.giveHeaderFocus();
          break;
        }
        default:
          break;
      }
    },
    giveHeaderFocus() {
      // remove focusability from inactives
      this.headers.forEach((header) => {
        header.setAttribute('tabindex', -1);
      });
      // set active focus
      this.headers[this.current].setAttribute('tabindex', 0);
      this.headers[this.current].focus();
    },
    getPanelHeight(i) {
      const panel = this.panels[i];
      // set auto height and read offsetHeight
      panel.style.height = 'auto';
      const height = panel.offsetHeight;
      // remove style
      panel.style.height = '';
      return height;
    },
    setPanelHeight(i) {
      const panel = this.panels[i];
      // get panel height
      const panelHeight = this.getPanelHeight(i);
      // recalc style and layout
      panel.getBoundingClientRect();
      // set height on panel, reset to 'auto' on transition complete
      panel.style.height = `${panelHeight}px`;
      setTimeout(() => {
        panel.style.transition = 'none';
        panel.style.height = 'auto';
        // recalc style and layout
        panel.getBoundingClientRect();
        panel.style.transition = '';
      }, 250);
    },
    unsetPanelHeight(i) {
      const panel = this.panels[i];
      // get panel height
      const panelHeight = this.getPanelHeight(i);
      // set panel height from 'auto' to px
      panel.style.height = `${panelHeight}px`;
      // recalc style and layout
      panel.getBoundingClientRect();
      // reset height
      panel.style.height = 0;
    },
  },
};
</script>
