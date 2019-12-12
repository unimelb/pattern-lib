<template>
  <div
    :class="alt ? 'tabs--alt' : false"
    class="tabs section">
    <div class="tabs__section max">
      <div
        v-if="selectOptions.length > 1"
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
        v-if="!useSelect"
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

export default {
  components: { StyledSelect },
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
  },
  methods: {
    selectActive(e) {
      const index = e.target.selectedIndex;

      this.setActive(index);
    },
    setActive(index) {
      this.panels.forEach((panel, j) => {
        panel.isActive = index === j;
      });
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
