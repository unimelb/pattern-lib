<template>
  <div
    :class="alt ? 'tabs--alt' : false"
    class="tabs section">
    <div
      class="tabs__section"
      :class="showControls ? '' : 'max'">
      <div
        v-if="useSelect && showSelect"
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
        :class="[tabsControlClass, edgePrev ? 'tabs__controls--disabled' : '']"
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
        class="tabs__tablist"
        :class="tabsListClasses"
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
          @click.prevent="moveToTab(index)">{{ tab.title }}</a>
      </div>
      <div
        v-if="showControls"
        aria-label="Go to next tab"
        class="tabs__controls tabs__controls--next"
        :class="[tabsControlClass, edgeNext ? 'tabs__controls--disabled' : '']"
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
import { throttle } from 'throttle-debounce';
import StyledSelect from '../forms/StyledSelect.vue';
import SvgIcon from '../icons/SvgIcon.vue';

import {
  KEYCODE_LEFT, KEYCODE_UP, KEYCODE_RIGHT, KEYCODE_DOWN,
} from '../../constants/keycodes';

import { TIMER_100, TIMER_2000 } from '../../constants/timers';

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
      validator: (color) => ['', 'navy', 'teal', 'yellow'].includes(color),
    },
  },
  data: () => ({
    panels: [],
    selected: '',
    showControls: false,
    tabsWidth: 0,
    showSelect: true,
    edgePrev: true,
    edgeNext: false,
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
    tabsControlClass() {
      const { color } = this;

      return {
        [`tabs__controls--${color}`]: ['navy', 'teal', 'yellow'].includes(color),
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
      }, TIMER_2000);
    },
  },
  mounted() {
    this.panels = this.getTabs();
    this.showSelect = this.selectOptions.length > 1;

    this.throttledTabsScrollEvent = throttle(TIMER_100, this.checkControls);
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
    checkControlIsDisabled(control, index) {
      if (control === index) {
        return true;
      }
      return false;
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
      const tabsWidthIntital = 0;

      if (tabsList !== undefined) {
        const tabs = this.$refs.tabsList.childNodes;
        const tabsWidth = [...tabs].reduce((total, tab) => total + tab.clientWidth, tabsWidthIntital);

        return tabsWidth;
      }

      return tabsWidthIntital;
    },
    selectActive(e) {
      const index = e.target.selectedIndex;

      this.setActive(index);
    },
    setActive(index) {
      this.panels.forEach((panel, j) => {
        panel.isActive = index === j;
      });
    },
    scrollTo(index) {
      const elementToScrollTo = this.$refs.tabs[index];
      elementToScrollTo.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    },
    handleKey(e) {
      const { prev, next } = this.getTabSiblings();

      // Don't catch key events when ⌘ or Alt modifier is present
      if (e.metaKey || e.altKey) {
        return;
      }

      switch (e.keyCode) {
        // left / up
        case KEYCODE_LEFT:
        case KEYCODE_UP:
          this.moveToTab(prev);
          break;
        // right / down
        case KEYCODE_RIGHT:
        case KEYCODE_DOWN:
          this.moveToTab(next);
          break;
        default:
          break;
      }
    },
    getTabs() {
      // Only grab <Tab>
      const children = this.$children.filter((child) => child.title !== undefined);
      const childrenActiveIndex = 0;

      children.forEach((tab, index) => {
        tab.namespace = `ui-tab-${this._uid}`;
        tab.index = index;
        tab.isActive = index === childrenActiveIndex;
      });

      return children;
    },
    getTabSiblings() {
      let curr = -1;
      const startTabIndex = 0;

      this.$refs.tabs.forEach((tab, index) => {
        if (tab.getAttribute('tabindex') === '0') {
          curr = index;
        }
      }, this);

      const prev = curr - 1 < startTabIndex ? startTabIndex : curr - 1;
      const next = curr + 1 > this.$refs.tabs.length - 1 ? this.$refs.tabs.length - 1 : curr + 1;

      return {
        prev,
        next,
      };
    },
    moveToTab(toTab) {
      const { length } = this.$refs.tabs;
      const startTabIndex = 0;

      this.edgeNext = this.checkControlIsDisabled(toTab, length - 1);
      this.edgePrev = this.checkControlIsDisabled(toTab, startTabIndex);

      this.setActive(toTab);
      this.scrollTo(toTab);
      this.$refs.tabs[toTab].focus();
    },
  },
};
</script>
