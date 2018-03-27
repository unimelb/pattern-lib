<template>
  <div :class="`toggle__item${ isExpanded ? ' toggle__item--active' : '' }`">
    <div
      :id="`${namespace}-header-${index + 1}`"
      :aria-controls="`${namespace}-panel-${index + 1}`"
      tabindex="0"
      class="toggle__header"
      @click="$parent.handleClick"
      @keydown="$parent.handleKey"
      :aria-selected="isExpanded"
    >
      <component :is="element" :class="`toggle__trigger${ isExpanded ? ' toggle__trigger--active' : '' }`">{{ statetitle }}</component>
    </div>
    <div
      ref="panel"
      :id="`${namespace}-panel-${index + 1}`"
      role="region"
      :aria-labelledby="`${namespace}-header-${index + 1}`"
      :tabindex="isExpanded ? 0 : -1"
      class="toggle__panel"
      :aria-expanded="isExpanded"
      :aria-hidden="!isExpanded"
    >
      <div class="toggle__panel-inner">
        <slot></slot>
      </div>
      <a
        :href="`#${namespace}-header-${index + 1}`"
        :aria-labelledby="`${namespace}-header-${index + 1}`"
        class="toggle__footer"
        @click="$parent.handleClick"
      >
        {{ close }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    titleopen: {
      type: String,
    },
    close: {
      type: String,
      default: 'Close',
    },
    active: {
      type: Boolean,
      default: false,
    },
    expanded: {
      type: Boolean,
      default: false,
    },
    element: {
      type: String,
      default: 'h2',
      validator: val => ['h2', 'button', 'div', 'span'].indexOf(val) !== -1,
    },
  },
  data: () => ({
    isExpanded: false,
    namespace: '',
    index: 0,
  }),
  computed: {
    statetitle() {
      return (this.isExpanded && this.titleopen) ? this.titleopen : this.title;
    },
  },
  mounted() {
    this.isExpanded = this.expanded;
    this.namespace = this.$parent.namespace;
  },
  methods: {
    setExpanded(val) {
      this.isExpanded = val;
    },
    getPanelHeight() {
      const p = this.$refs.panel;
      // set auto height and read offsetHeight
      p.style.height = 'auto';
      const height = p.offsetHeight;
      // remove style
      p.style.height = '';
      return height;
    },
    setPanelHeight() {
      const p = this.$refs.panel;
      // get panel height
      const panelHeight = this.getPanelHeight();
      // recalc style and layout
      p.getBoundingClientRect();
      // set height on panel, reset to 'auto' on transition complete
      p.style.height = `${panelHeight}px`;
      setTimeout(() => {
        p.style.transition = 'none';
        p.style.height = 'auto';
        // recalc style and layout
        p.getBoundingClientRect();
        p.style.transition = '';
      }, 250);
    },
    unsetPanelHeight() {
      const p = this.$refs.panel;
      // get panel height
      const panelHeight = this.getPanelHeight();
      // set panel height from 'auto' to px
      p.style.height = `${panelHeight}px`;
      // recalc style and layout
      p.getBoundingClientRect();
      // reset height
      p.style.height = 0;
    },
  },
};
</script>
