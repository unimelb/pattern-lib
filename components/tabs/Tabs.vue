<template>
  <div class="tabs section">
    <div class="tabs__section">
      <div class="styled-select tabs__tablist--mobile">
        <select ref="selector" @change="setActive($refs.selector.value)">
          <option
            v-for="(tab, index) in panels"
            :key="`${namespace}-mob-${index + 1}`"
            :aria-controls="`${namespace}-panel-${index + 1}`"
            :selected="tab.isActive ? 'selected' : null"
          >
          {{ tab.title }}
          </option>
        </select>
      </div>
      <div class="tabs__tablist max" role="tablist" @keyup="handleKey">
        <button
          class="tabs__tab"
          role="tab"
          ref="tabs"
          :tabindex="tab.isActive ? 0 : -1"
          v-for="(tab, index) in panels"
          :key="`${namespace}-desk-${index + 1}`"
          :id="`${namespace}-${index + 1}`"
          :aria-controls="`${namespace}-panel-${index + 1}`"
          @click="setActive(tab.title)"
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
// tabs-set-active

export default {
  data: () => ({
    panels: [],
  }),
  computed: {
    namespace() {
      return `ui-tab-${this._uid}`;
    },
  },
  mounted() {
    this.panels = this.$children;
    this.panels.forEach((tab, i) => {
      tab.namespace = this.namespace;
      tab.index = i;
      if (i === 0) {
        tab.isActive = true;
      }
    });
  },
  methods: {
    setActive(selectedtitle) {
      this.panels.forEach((panel) => {
        panel.isActive = (panel.title === selectedtitle);
      });
      this.$emit('tabs-set-active', selectedtitle);
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
          this.setActive(this.panels[prev].title);
          break;
        // right / down
        case 39:
        case 40:
          this.setActive(this.panels[next].title);
          break;
        default:
          break;
      }
    },
  },
};
</script>
