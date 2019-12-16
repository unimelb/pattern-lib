<template>
  <div
    :class="alt ? 'tabs--alt' : false"
    class="tabs section">
    <div
      class="tabs__section"
      :class="showControls ? '' : 'max'">
      <div
        v-if="useSelect"
        :class="classes">
        <div
          v-if="title"
          class="tabs__dropdown-title">
          {{ title }}:
        </div>
        <div class="tabs__dropdown-select">
          <StyledSelect
            :label="labelText"
            aria-label="Choose an option"
            aria-hidden="true"
            :options="selectOptions"
            :callback="selectActive" />
        </div>
      </div>
      <div
        v-if="showControls"
        aria-label="Go to previous tab"
        class="tabs__controls tabs__controls--prev"
        role="button"
        @click="prevClick"
        @keydown.13="prevClick"
        @keydown.32="prevClick">
        <SvgIcon
          name="chevron-left"
          width="10"
          height="10"
          aria-hidden="true" />
      </div>
      <div
        v-if="!useSelect"
        ref="tabsList"
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
        v-if="showControls"
        aria-label="Go to next tab"
        class="tabs__controls tabs__controls--next"
        role="button"
        @click="nextClick"
        @keydown.13="nextClick"
        @keydown.32="nextClick">
        <SvgIcon
          name="chevron-right"
          width="10"
          height="10"
          aria-hidden="true" />
      </div>
    </div>
    <div tabindex="0">
      <slot />
    </div>
  </div>
</template>

<script>
import throttle from 'lodash.throttle';
import StyledSelect from '../forms/StyledSelect.vue';
import SvgIcon from '../icons/SvgIcon.vue';

export default {
  components: {
    StyledSelect,
    SvgIcon,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    showCount: {
      type: Boolean,
      default: false,
    },
    alt: {
      type: Boolean,
      default: false,
    },
    useSelect: {
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
    showControls: false,
    tabsWidth: 0,
  }),
  computed: {
    classes() {
      return [
        'tabs__dropdown',
        {
          'tabs__dropdown--mobile': !this.useSelect,
          'tabs__dropdown--has-label': this.label || this.showCount,
        },
      ];
    },
    tabsListClasses() {
      const { alt, color } = this;

      return {
        'tabs__tablist--alt': alt,
        [`tabs__tablist--${color}`]: ['navy', 'teal', 'yellow'].includes(color),
      };
    },
    selectOptions() {
      const filterOptionTitles = (option) => option.map((value) => value.title);

      const options = filterOptionTitles(this.panels);

      return options;
    },
    labelText() {
      const { label, showCount, selectOptions } = this;

      if (showCount) {
        if (label) {
          return `${selectOptions.length} ${label}`;
        }

        return selectOptions.length;
      }

      if (label) {
        return label;
      }

      return '';
    },
  },
  watch: {
    panels() {
      // Wait a bit before calculations.  For slower devices.
      setTimeout(() => {
        this.tabsWidth = this.calculateTabsWidth();
        this.showControls = this.hasControls();
      }, 2000);
    },
  },
  mounted() {
    this.panels = this.getTabs();

    this.throttledTabsScrollEvent = throttle(this.checkControls, 100);
    window.addEventListener('resize', this.throttledTabsScrollEvent);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.throttledTabsScrollEvent);
  },
  methods: {
    nextClick() {
      const { next } = this.getTabSiblings();

      this.moveToTab(next);
    },
    prevClick() {
      const { prev } = this.getTabSiblings();

      this.moveToTab(prev);
    },
    checkControls() {
      this.showControls = this.hasControls();
    },
    hasControls() {
      const { tabsList } = this.$refs;

      if (tabsList !== undefined) {
        return this.tabsWidth > tabsList.clientWidth;
      }

      return false;
    },
    calculateTabsWidth() {
      const { tabsList } = this.$refs;

      if (tabsList !== undefined) {
        const tabs = this.$refs.tabsList.childNodes;
        const tabsWidth = [...tabs].reduce((total, tab) => total + tab.clientWidth, 0);

        return tabsWidth;
      }

      return 0;
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
      const { prev, next } = this.getTabSiblings();

      // Don't catch key events when ⌘ or Alt modifier is present
      if (e.metaKey || e.altKey) return;

      switch (e.keyCode) {
        // left / up
        case 37:
        case 38:
          this.moveToTab(prev);
          break;
        // right / down
        case 39:
        case 40:
          this.moveToTab(next);
          break;
        default:
          break;
      }
    },
    getTabs() {
      // Only grab <Tab>
      const children = this.$children.filter((child) => child.title !== undefined);

      children.forEach((tab, i) => {
        tab.namespace = `ui-tab-${this._uid}`;
        tab.index = i;
        tab.isActive = i === 0;
      });

      return children;
    },
    getTabSiblings() {
      let curr = -1;
      this.$refs.tabs.forEach((tab, index) => {
        if (tab.getAttribute('tabindex') === '0') curr = index;
      }, this);

      const prev = curr - 1 < 0 ? this.$refs.tabs.length - 1 : curr - 1;
      const next = curr + 1 > this.$refs.tabs.length - 1 ? 0 : curr + 1;

      return {
        prev,
        next,
      };
    },
    moveToTab(toTab) {
      this.setActive(toTab);
      this.$refs.tabs[toTab].focus();
    },
  },
};
</script>
