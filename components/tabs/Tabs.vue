<template>
  <div
    :class="alt ? 'tabs--alt' : false"
    class="tabs section">
    <div
      class="tabs__section"
      :class="isMobile ? '' : 'max'">
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
        v-if="isMobile"
        aria-label="Go to previous tab"
        class="tabs__controls tabs__controls--prev"
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
        v-if="isMobile"
        aria-label="Go to next tab"
        class="tabs__controls tabs__controls--next"
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
    isMobile: false,
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
  mounted() {
    // Only grab <Tab>
    const children = this.$children.filter((child) => child.title !== undefined);

    children.forEach((tab, i) => {
      tab.namespace = `ui-tab-${this._uid}`;
      tab.index = i;
      tab.isActive = i === 0;
    });

    this.panels = children;

    // Hack to get child components to properly load.
    setTimeout(() => {
      this.tabsWidth = this.calculateTabsWidth();
      this.isMobile = this.checkControls();

      window.addEventListener('resize', this.checkTabControls);
    }, 1000);
  },
  methods: {
    rightClick() {
      const { next } = this.getTabSiblings();

      this.moveToTab(next);
    },
    leftClick() {
      const { prev } = this.getTabSiblings();

      this.moveToTab(prev);
    },
    checkTabControls() {
      this.isMobile = this.checkControls();
    },
    checkControls() {
      const tabsList = this.$refs.tabsList.clientWidth;

      return this.tabsWidth > tabsList;
    },
    calculateTabsWidth() {
      const tabs = this.$refs.tabsList.querySelectorAll('.tabs__tab');
      const tabsWidth = [...tabs].reduce((total, tab) => total + tab.clientWidth, 0);

      return tabsWidth;
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
