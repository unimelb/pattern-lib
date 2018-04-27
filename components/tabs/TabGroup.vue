<template>
  <div class="tabs">
    <div class="tabs__section">
      <div class="tabs__tablist max" role="tablist" @keydown="handleKey">
        <button
          class="tabs__tab"
          role="tab"
          ref="tabs"
          :tabindex="tab.isActive ? 0 : -1"
          v-for="(tab, index) in panels"
          :key="index"
          :id="`${namespace}-${index + 1}`"
          :aria-controls="`${namespace}-panel-${index + 1}`"
          @click="setActive(tab)"
        >
        {{ tab.title }}
        </button>
      </div>
    </div>
    <div class="tabs__section">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// tab-group-set-active

export default {
  data: () => ({
    panels: [],
  }),
  computed: {
    namespace() {
      return `ui-tab-${this._uid}`;
    },
  },
  created() {
    this.panels = this.$children;
  },
  mounted() {
    this.panels.forEach((tab, i) => {
      tab.namespace = this.namespace;
      tab.index = i;
      if (i === 0) {
        tab.isActive = true;
      }
    });
  },
  methods: {
    setActive(selectedtab) {
      this.panels.forEach((panel) => {
        panel.isActive = (panel.title === selectedtab.title);
      });
      this.$emit('tab-group-set-active', selectedtab.title);
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
          this.setActive(this.panels[prev]);
          break;
        // right / down
        case 39:
        case 40:
          this.setActive(this.panels[next]);
          break;
        default:
          break;
      }
    },
  },
};
</script>

