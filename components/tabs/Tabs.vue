<template>
  <div
    :class="alt ? 'tabs--alt' : false"
    class="tabs section">
    <div class="tabs__section max">
      <div
        v-if="!min || useSelect"
        :class="classes">
        <div
          v-if="selectTitle"
          class="tabs__select-title">
          {{ selectTitle }}:
        </div>
        <StyledSelect
          aria-label="titles"
          aria-hidden="true"
          :callback="selectActive"
          :options="selectOptions">
          <!-- <option
            v-for="(tab, index) in panels"
            :key="`ui-tab-${_uid}-mob-${index + 1}`"
            :aria-controls="`ui-tab-${_uid}-panel-${index + 1}`"
            :selected="tab.isActive ? 'selected' : null">
            {{ tab.title }}
          </option> -->
        </StyledSelect>
      </div>
      <div
        v-if="!useSelect"
        :class="min ? 'tabs__tablist--min' : false"
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
    selectTitle: {
      type: String,
      default: '',
    },
    alt: {
      type: Boolean,
      default: false,
    },
    min: {
      type: Boolean,
      default: false,
    },
    useSelect: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    panels: [],
  }),
  computed: {
    classes() {
      return [
        'tabs__select',
        {
          'tabs__tablist--mobile': !this.useSelect,
        },
      ];
    },
    selectOptions() {
      const filterOptionTitles = (option) => option.map((value) => value.title);

      const options = filterOptionTitles(this.panels);

      return options;
    },
  },
  mounted() {
    // Only grab <Tab>
    const children = this.$children.filter((child) => child.$vnode.tag.includes('Tab'));

    children.forEach((tab, i) => {
      tab.namespace = `ui-tab-${this._uid}`;
      tab.index = i;
    });

    children[0].isActive = true;

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
