<template>
  <div
    :class="alt ? 'tabs--alt' : false"
    class="tabs section">
    <div class="tabs__section">
      <div
        v-if="!min"
        class="styled-select tabs__tablist--mobile">
        <select
          ref="selector"
          :aria-label="tab.title"
          aria-hidden="true"
          @change="setActive($refs.selector.selectedIndex)"
        >
          <option
            v-for="(tab, index) in panels"
            :key="`${namespace}-mob-${index + 1}`"
            :aria-controls="`${namespace}-panel-${index + 1}`"
            :selected="tab.isActive ? 'selected' : null"
          >{{ tab.title }}</option>
        </select>
      </div>
      <div
        :class="min ? 'tabs__tablist--min' : false"
        class="tabs__tablist max"
        role="tablist"
        @keyup="handleKey"
      >
        <a
          v-for="(tab, index) in panels"
          ref="tabs"
          :tabindex="tab.isActive ? 0 : -1"
          :aria-selected="tab.isActive"
          :key="`${namespace}-desk-${index + 1}`"
          :id="`${namespace}-${index + 1}`"
          :aria-controls="`${namespace}-panel-${index + 1}`"
          :href="`#${namespace}-panel-${index + 1}`"
          class="tabs__tab"
          role="tab"
          @click.prevent="setActive(index)"
        >{{ tab.title }}</a>
      </div>
    </div>
    <div
      tabindex="0"
      class="tabs__section">
      <slot/>
    </div>
  </div>
</template>

<script>
// tabs-set-active

export default {
  props: {
    alt: {
      type: Boolean,
      default: false,
    },
    min: {
      type: Boolean,
      default: false,
    },
  },
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
    });

    this.panels[0].isActive = true;
  },
  methods: {
    setActive(index) {
      this.panels.forEach((panel, j) => {
        panel.isActive = index === j;
      });
      this.$emit('tabs-set-active', this.panels[index].title);
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
          this.setActive(prev);
          this.$refs.tabs[prev].focus();
          break;
        // right / down
        case 39:
        case 40:
          this.setActive(next);
          this.$refs.tabs[next].focus();
          break;
        default:
          break;
      }
    },
  },
};
</script>
