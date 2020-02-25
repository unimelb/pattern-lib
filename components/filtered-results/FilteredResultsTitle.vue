<template>
  <h4 class="filtered-results__title">
    {{ items.length }} results found with <strong>{{ filters.length }} filters</strong> applied.
    (<span
      class="filtered-results__title-notice text-italic text-bold"
      @click="triggerClick">
      {{ triggerFiltersMsg }}
    </span>)
  </h4>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
      required: true,
    },
    filters: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  data() {
    return {
      triggerFiltersMsg: 'Apply filters to show you Domestic undergraduate options?',
      keys: {
        undergrad: 'undergraduate study',
        postgrad: 'graduate study',
        research: 'research study',
      },
    };
  },
  updated() {
    this.updateMsg();
  },
  created() {
    this.updateMsg();
  },
  methods: {
    triggerClick() {
      const applyFilter = {
        type: this.filters.length ? 'default' : 'custom',
      };
      this.$parent.$emit('change:filters', applyFilter);
    },
    getFiltersText() {
      const text = [];
      this.filters.forEach((f) => {
        text.push(this.keys[f]);
      });
      return text;
    },
    updateMsg() {
      const appliedFiltersText = this.getFiltersText().join(' and ');
      this.triggerFiltersMsg = this.filters.length
        ? `Filters applied to show you ${appliedFiltersText} options (change)`
        : 'Apply filters to show you Domestic undergraduate options?';
    },
  },
};
</script>
