<template>
  <div
    :class="alt ? 'tabs--alt' : false"
    class="tabs section">
    <div class="tabs__section">
      <div
        :aria-label="'Previous: '"
        class="tabs__arrow tabs__arrow-left"
        role="button"
        @click="leftClick"
        @keydown.13="leftClick"
        @keydown.32="leftClick">
        <SvgIcon
          name="chevron-left"
          width="10"
          height="10"
          aria-hidden="true" />
      </div>
      <div
        ref="tablist"
        :class="tabsListClasses"
        class="tabs__tablist"
        role="tablist"
        @keyup="handleKey">
        <a
          v-for="(tab, index) in panels"
          :id="`ui-tab-${_uid}-${index + 1}`"
          ref="tabs"
          :key="`ui-tab-${_uid}-desk-${index + 1}`"
          :tabindex="tab.isActive ? 0 : -1"
          :aria-selected="tab.isActive"
          :aria-controls="`ui-tab-${_uid}-panel-${index + 1}`"
          :href="`#ui-tab-${_uid}-panel-${index + 1}`"
          :class="alt ? 'tabs__tab--alt' : false"
          class="tabs__tab"
          role="tab"
          @click.prevent="setActive(index)">{{ tab.title }}</a>
      </div>
      <div
        :aria-label="'Previous: '"
        class="tabs__arrow tabs__arrow-right"
        role="button"
        @click="rightClick"
        @keydown.13="rightClick"
        @keydown.32="rightClick">
        <SvgIcon
          name="chevron-right"
          width="10"
          height="10"
          aria-hidden="true" />
      </div>
    </div>
    <div
      tabindex="0"
      class="tabs__section">
      <slot />
    </div>
  </div>
</template>

<script>
import SvgIcon from '../icons/SvgIcon.vue';

export default {
  components: {
    SvgIcon,
  },
  props: {
    alt: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: '',
      validator: (color) => ['', 'navy', 'teal', 'yellow'].indexOf(color) > -1,
    },
  },
  data: () => ({
    panels: [],
    selected: '',
  }),
  computed: {
    tabsListClasses() {
      const { alt, color } = this;

      return {
        'tabs__tablist--alt': alt,
        [`tabs__tablist--${color}`]: ['navy', 'teal', 'yellow'].includes(color),
      };
    },
  },
  mounted() {
    // Only grab <Tab>
    const children = this.$children.filter((child) => child.title !== undefined);

    children.forEach((tab, i) => {
      tab.namespace = `ui-tab-${this._uid}`;
      tab.index = i;
      tab.isActive = i === 0;
    });

    this.panels = children;
  },
  methods: {
    rightClick() {
      this.$refs.tablist.scrollLeft += 110;
    },
    leftClick() {
      this.$refs.tablist.scrollLeft -= 110;
    },
    selectActive(e) {
      const index = e.target.selectedIndex;

      this.setActive(index);
    },
    setActive(index) {
      this.panels.forEach((panel, j) => {
        panel.isActive = index === j;
      });

      const elementToScrollTo = this.$refs.tabs[index];
      elementToScrollTo.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
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

<style>
.tabs__section {
  display: flex;
}
.tabs {
  &__tablist {
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    display: flex;
  }

  &__arrow {
    cursor: pointer;
    padding: 20px 8px;

    &-left {
    left: 0;
  }

  &-right {
    right: 0;
  }
  }
}
</style>
