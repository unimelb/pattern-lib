<template>
  <div class="bg-light-blue filter-box">
    <h4 class="filter-box__header">
      Filter by
    </h4>

    <p>{{ filterBy }}</p>

    <FilterDropdown
      :options="options"
      :options-label="optionsLabel"
      :placeholder-label="placeholderLabel"
      @change="onChange"
      @clear="onClearFilters" />

    <div class="filter-box__btns-wrapper">
      <ButtonIcon
        no-icon
        @click.native.prevent="onClearFilters">
        Clear filters
      </ButtonIcon>

      <ButtonIcon
        no-icon
        class="btn--cta"
        @click.native.prevent="onUpdateResults">
        Update results
      </ButtonIcon>
    </div>
  </div>
</template>

<script>
import ButtonIcon from '../../buttons/ButtonIcon.vue';
import FilterDropdown from '../filter-dropdown/FilterDropdown.vue';

export default {
  name: 'FilterBox',
  components: { ButtonIcon, FilterDropdown },
  props: {
    filterBy: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    placeholderLabel: {
      type: String,
      required: true,
    },
    optionsLabel: {
      type: String,
      default: '',
    },
  },
  methods: {
    onChange(changedOptions) {
      this.$emit('change', changedOptions);
    },
    onClearFilters() {
      this.$emit('clear');
    },
    onUpdateResults() {
      this.$emit('update');
    },
  },
};
</script>
