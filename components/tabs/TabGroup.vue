<template>
  <div class="tabs">
    <div class="tabs__tablist" role="tablist" @keydown="handleKey">
      <button
        class="tabs__tab"
        role="tab"
        ref="tabs"
        @click="handleClick"
        :id="`${namespace}-${index + 1}`"
        :aria-controls="`${namespace}-panel-${index + 1}`"
        :tabindex="index === 0 ? 0 : -1"
        v-for="(item, index) in items"
        :key="index"
      >
        {{ item.data.attrs.title }}
      </button>
    </div>
    <div
      class="tabs__panel"
      role="tabpanel"
      ref="panels"
      v-for="(item, index) in items"
      v-html="content[index].innerHTML"
      :id="`${namespace}-panel-${index + 1}`"
      :aria-hidden="index !== 0"
      :aria-labelledby="`${namespace}-${index + 1}`"
      :key="index"
    ></div>
  </div>
</template>

<script>
import { vnodeToElement } from '../shared/utils';

export default {
  name: 'tab-group',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    namespace() {
      return `ui-tab-${this._uid}`;
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
  methods: {
    handleClick(e) {
      e.preventDefault();
      let curr = -1;
      this.$refs.tabs.forEach((tab, index) => {
        if (tab === e.target) curr = index;
      }, this);
      this.showTab(curr);
    },
    showTab(curr) {
      this.$refs.tabs.forEach((tab, index) => {
        tab.setAttribute('tabindex', index === curr ? 0 : -1);
      }, this);

      this.$refs.panels.forEach((panel, index) => {
        panel.setAttribute('aria-hidden', index !== curr);

        if (index === curr) {
          panel.setAttribute('tabindex', 0);
          panel.setAttribute('aria-selected', 'true');
        } else {
          panel.setAttribute('tabindex', -1);
          panel.setAttribute('aria-selected', 'false');
        }
      }, this);
    },
    handleKey(e) {
      let curr = -1;
      this.$refs.tabs.forEach((tab, index) => {
        if (tab.getAttribute('tabindex') === '0') curr = index;
      }, this);

      const prev = curr - 1 < 0 ? this.$refs.tabs.length - 1 : curr - 1;
      const next = curr + 1 > this.$refs.tabs.length - 1 ? 0 : curr + 1;

      // Don't catch key events when ⌘ or Alt modifier is present
      if (e.metaKey || e.altKey) return;

      switch (e.keyCode) {
        // left / up
        case 37:
        case 38:
          this.showTab(prev);
          break;
        // right / down
        case 39:
        case 40:
          this.showTab(next);
          break;
        default:
          break;
      }
    },
  },
};
</script>
