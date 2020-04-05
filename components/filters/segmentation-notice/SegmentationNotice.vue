<template>
  <div class="segmentation-notice">
    {{ resultsLength }} results found with <span class="segmentation-notice__filters-quantity">{{ filtersApplied }} filters</span> applied.
    <a
      v-if="isDefaultFilterApplied"
      href="#"
      @click.prevent="onClickWhenDefaultApplied">{{ messageDefaultFilters }}</a>
    <a
      v-else
      href="#"
      @click.prevent="onClickWhenCustomApplied">{{ messageCustomFilters }}</a>
  </div>
</template>

<script>
import getSelectedOptionLabels from '../getSelectedOptionLabels';

const defaultLabels = {
  undergrad: 'undergraduate study',
  postgrad: 'graduate study',
  research: 'research study',
};

export default {
  name: 'SegmentationNotice',
  props: {
    isDefaultFilterApplied: {
      type: Boolean,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    resultsLength: {
      type: Number,
      required: true,
    },
    userQualification: {
      type: String,
      required: true,
      validator(value) {
        return Object.keys(defaultLabels).includes(value);
      },
    },
  },
  computed: {
    messageDefaultFilters() {
      const qualificationLabel = defaultLabels[this.userQualification];
      return `Filters applied to show you ${qualificationLabel} options (change)`;
    },
    messageCustomFilters() {
      const qualificationLabel = defaultLabels[this.userQualification];
      return `Apply filters to show you ${qualificationLabel} options?`;
    },
    filtersApplied() {
      return getSelectedOptionLabels(this.options).length;
    },
  },
  methods: {
    onClickWhenDefaultApplied() {
      this.$emit('change');
    },
    onClickWhenCustomApplied() {
      this.$emit('clear');
    },
  },
};
</script>
