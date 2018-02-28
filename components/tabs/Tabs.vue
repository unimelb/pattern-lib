<template>
  <div class="tabs">
    <div class="tabs__tablist" role="tablist">
      <button
        class="tabs__tab"
        role="tab"
        :tabindex="tab.isActive ? 0 : -1"
        v-for="(tab, index) in tabs"
        :key="index"
        :id="`${namespace}-${index + 1}`"
        :aria-controls="`${namespace}-panel-${index + 1}`"
        @click="setActive(tab)"
      >
      {{ tab.title }}
      </button>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data: () => ({
    tabs: [],
  }),
  computed: {
    namespace() {
      return `ui-tab-${this._uid}`;
    },
  },
  created() {
    this.tabs = this.$children;
  },
  mounted() {
    this.tabs.forEach((tab, i) => {
      tab.namespace = this.namespace;
      tab.index = i;
    });
  },
  methods: {
    setActive(selectedtab) {
      this.tabs.forEach((tab) => {
        tab.isActive = (tab.title === selectedtab.title);
      });
    },
  },
};
</script>

